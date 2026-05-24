module Jekyll
  module EmploymentFilters
    def sort_by_date(array)
      months = {
        'january' => 1, 'february' => 2, 'march' => 3, 'april' => 4,
        'may' => 5, 'june' => 6, 'july' => 7, 'august' => 8,
        'september' => 9, 'october' => 10, 'november' => 11, 'december' => 12
      }

      array.sort_by do |item|
        start_date = item['start_date']
        if start_date && start_date.to_s != ""
          parts = start_date.split
          if parts.length >= 2
            month_str = parts[0].downcase
            year_str = parts[1]
            year = year_str.to_i rescue 0
            month = months[month_str] || 0
            -(year * 100 + month)
          else
            0
          end
        else
          0
        end
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::EmploymentFilters)

