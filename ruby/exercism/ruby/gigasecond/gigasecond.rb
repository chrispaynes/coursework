class Gigasecond

  def self.from(time_a)
    new_time = time_a.strftime('%s').to_f + (10**9)
    Time.at(new_time)
  end

end

module BookKeeping
  VERSION = 5
end