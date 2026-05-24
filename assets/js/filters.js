// Employment Filtering
document.addEventListener('DOMContentLoaded', function() {
  const typeFilters = document.querySelectorAll('.type-filter');
  const periodFilter = document.getElementById('periodFilter');
  const resetButton = document.getElementById('resetFilters');
  const employmentList = document.getElementById('employmentList');
  const employmentCards = document.querySelectorAll('.employment-card');

  // Apply filters
  function applyFilters() {
    const selectedTypes = Array.from(typeFilters)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
    
    const selectedPeriod = periodFilter.value;

    employmentCards.forEach(card => {
      const cardType = card.getAttribute('data-type');
      const cardPeriod = card.getAttribute('data-period');

      let typeMatches = selectedTypes.length === 0 || selectedTypes.includes(cardType);
      let periodMatches = selectedPeriod === '' || cardPeriod === selectedPeriod;

      if (typeMatches && periodMatches) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  // Event listeners
  typeFilters.forEach(filter => {
    filter.addEventListener('change', applyFilters);
  });

  periodFilter.addEventListener('change', applyFilters);

  resetButton.addEventListener('click', function() {
    typeFilters.forEach(checkbox => {
      checkbox.checked = checkbox.value === 'technical'; // Default: show technical
    });
    periodFilter.value = '';
    applyFilters();
  });

  // Apply initial filters (show technical by default)
  applyFilters();
});
