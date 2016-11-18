class Raindrops
  def self.convert(digit)
    str = ''
    str << 'Pling' if factors(digit).include? 3
    str << 'Plang' if factors(digit).include? 5
    str << 'Plong' if factors(digit).include? 7

    str.empty? ? digit.to_s : str
  end

  private
  def self.factors(digit)
    (1..digit).select { |index| (digit % index).zero? }
  end

end

module BookKeeping
  VERSION = 3
end