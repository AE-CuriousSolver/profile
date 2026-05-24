module Jekyll
  class Site
    alias_method :original_initialize, :initialize

    def initialize(config)
      original_initialize(config)
      
      # Sort employment items by date
      if collections['employment']
        collections['employment'].docs.sort! do |a, b|
          date_a = parse_date(a.data['start_date'])
          date_b = parse_date(b.data['start_date'])
          date_b <=> date_a  # descending order
        end
      end
    end

    def parse_date(date_str)
      return 0 unless date_str
      
      months = {
        'january' => 1, 'february' => 2, 'march' => 3, 'april' => 4,
        'may' => 5, 'june' => 6, 'july' => 7, 'august' => 8,
        'september' => 9, 'october' => 10, 'november' => 11, 'december' => 12
      }
      
      parts = date_str.to_s.split
      return 0 if parts.length < 2
      
      month = months[parts[0].downcase] || 0
      year = parts[1].to_i rescue 0
      
      year * 100 + month
    end
  end
end
