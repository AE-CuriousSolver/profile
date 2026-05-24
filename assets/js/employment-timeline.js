// Timeline data stored for modal access
let employmentData = {};

// Helper function to parse employment date
function parseEmploymentDate(dateStr) {
  const months = {
    'january': 1, 'february': 2, 'march': 3, 'april': 4,
    'may': 5, 'june': 6, 'july': 7, 'august': 8,
    'september': 9, 'october': 10, 'november': 11, 'december': 12
  };
  
  if (!dateStr || dateStr.trim() === '' || dateStr.includes('Present')) {
    return 999999; // Future date (for "Present" dates)
  }
  
  // Handle formats like "April – June 2019" or "April 2019" or "October 2024 – January 2025"
  const parts = dateStr.split(/\s+/);
  if (parts.length < 2) return 0;
  
  // Find the first month and its corresponding year
  let month = months[parts[0].toLowerCase()] || 0;
  
  // Look for a year in the string (4 digits)
  let year = 0;
  for (let i = 0; i < parts.length; i++) {
    const yearMatch = parseInt(parts[i]);
    if (yearMatch >= 1900 && yearMatch <= 2100) {
      year = yearMatch;
      break;
    }
  }
  
  return year * 100 + month;
}

// Timeline Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const timelineBtn = document.getElementById('timelineToggle');
  const timelinePanel = document.getElementById('timelinePanel');
  const timelineList = document.getElementById('timelineList');
  const timelineClose = document.querySelector('.timeline-close');
  const modal = document.getElementById('employmentModal');

  // Sort timeline items by date
  if (timelineList) {
    const items = Array.from(timelineList.querySelectorAll('.timeline-item'));
    items.sort((a, b) => {
      const dateA = a.querySelector('.timeline-dates').textContent.trim();
      const dateB = b.querySelector('.timeline-dates').textContent.trim();
      
      const startA = dateA.split(' – ')[0].trim();
      const startB = dateB.split(' – ')[0].trim();
      
      return parseEmploymentDate(startB) - parseEmploymentDate(startA);
    });
    
    // Re-append sorted items
    items.forEach(item => timelineList.appendChild(item));
  }

  // Sort featured items by date
  const featuredList = document.getElementById('featuredList');
  if (featuredList) {
    const items = Array.from(featuredList.querySelectorAll('.featured-card'));
    items.sort((a, b) => {
      const dateA = a.querySelector('.featured-dates').textContent.trim();
      const dateB = b.querySelector('.featured-dates').textContent.trim();
      
      const startA = dateA.replace(/📅\s*/, '').split(' – ')[0].trim();
      const startB = dateB.replace(/📅\s*/, '').split(' – ')[0].trim();
      
      return parseEmploymentDate(startB) - parseEmploymentDate(startA);
    });
    
    // Re-append sorted items
    items.forEach(item => featuredList.appendChild(item));
  }

  // Store employment data from timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    const role = item.querySelector('.timeline-role').textContent;
    const company = item.querySelector('.timeline-company').textContent;
    const dates = item.querySelector('.timeline-dates').textContent;
    const location = item.querySelector('.timeline-location').textContent;
    const overview = item.querySelector('.timeline-overview').textContent;
    
    employmentData[index] = {
      role: role,
      company: company,
      dates: dates,
      location: location,
      overview: overview
    };
  });

  // Toggle timeline panel (expand/collapse)
  if (timelineBtn) {
    timelineBtn.addEventListener('click', function() {
      timelinePanel.classList.toggle('expanded');
      timelineBtn.classList.toggle('active');
      if (timelineClose) {
        timelineClose.classList.toggle('visible');
      }
    });
  }

  // Close timeline
  if (timelineClose) {
    timelineClose.addEventListener('click', closeTimeline);
  }

  // Close modal when clicking outside
  if (modal) {
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        closeEmploymentModal();
      }
    });
  }

  // Handle responsive behavior for learnings
  handleResponsiveLearnings();
});

// Close Timeline Expansion
function closeTimeline() {
  const timelinePanel = document.getElementById('timelinePanel');
  const timelineBtn = document.getElementById('timelineToggle');
  const timelineClose = document.querySelector('.timeline-close');
  
  timelinePanel.classList.remove('expanded');
  timelineBtn.classList.remove('active');
  if (timelineClose) {
    timelineClose.classList.remove('visible');
  }
}

// Open Timeline Modal
function openTimelineModal(button) {
  const timelineItem = button.closest('.timeline-item');
  const role = timelineItem.querySelector('.timeline-role').textContent;
  const company = timelineItem.querySelector('.timeline-company').textContent;
  const dates = timelineItem.querySelector('.timeline-dates').textContent;
  const location = timelineItem.querySelector('.timeline-location').textContent;
  const overview = timelineItem.querySelector('.timeline-overview').textContent;

  // Find corresponding featured job content
  const jobs = document.querySelectorAll('.featured-card');
  let foundContent = '';
  
  jobs.forEach(job => {
    const jobTitle = job.querySelector('.featured-title').textContent;
    const jobCompany = job.querySelector('.featured-company').textContent;
    if (jobTitle.trim() === role.trim() && jobCompany.trim() === company.trim()) {
      foundContent = job.querySelector('.featured-body').innerHTML;
    }
  });

  openEmploymentModal(role, company, dates, location, overview, foundContent);
}

// Open Employment Modal
function openEmploymentModal(title, company, dates, location, overview, content) {
  const modal = document.getElementById('employmentModal');
  const modalBody = document.getElementById('modalBody');

  const modalHTML = `
    <div class="modal-header-employment">
      <h2 class="modal-title-employment">${escapeHtml(title)}</h2>
      <p class="modal-company-employment">${escapeHtml(company)}</p>
      <div class="modal-meta-employment">
        <span> ${escapeHtml(location)}</span>
        <span>📅 ${escapeHtml(dates)}</span>
      </div>
    </div>
    <div class="modal-overview-employment">
      <p>${escapeHtml(overview)}</p>
    </div>
    <div class="modal-body-employment">
      ${content}
    </div>
  `;

  modalBody.innerHTML = modalHTML;
  modal.style.display = 'flex';
}

// Close Employment Modal
function closeEmploymentModal() {
  const modal = document.getElementById('employmentModal');
  modal.style.display = 'none';
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Handle Responsive Learnings (Hover on Desktop, Dropdown on Mobile)
function handleResponsiveLearnings() {
  const learningsDropdowns = document.querySelectorAll('.learnings-dropdown');

  learningsDropdowns.forEach(dropdown => {
    // Check if it's a touch device or mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (!isMobile && window.innerWidth > 768) {
      // Desktop: Convert dropdown to hover behavior
      const summary = dropdown.querySelector('summary');
      const details = dropdown.parentElement;

      // Prevent default details behavior
      dropdown.removeAttribute('open');

      summary.addEventListener('mouseenter', function() {
        dropdown.setAttribute('open', '');
      });

      details.addEventListener('mouseleave', function() {
        if (!dropdown.querySelector('summary:focus-within')) {
          dropdown.removeAttribute('open');
        }
      });
    }
    // Mobile: Keep default dropdown behavior
  });
}

// Handle window resize to update responsive behavior
window.addEventListener('resize', function() {
  handleResponsiveLearnings();
});
