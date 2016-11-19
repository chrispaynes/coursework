class Pangram
  def self.is_pangram?(str)
    str.downcase!
    str.gsub!(/[\W_0-9]/, '')
    str.length < 26 ? false : true
    str.split(//).uniq.sort == [*('a'..'z')]
  end
end

module BookKeeping
  VERSION = 2
end