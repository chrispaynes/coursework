class Complement
  def self.of_dna(nucleotide)
    conversion_dict = {'C' => 'G', 'G' => 'C', 'T' => 'A', 'A' => 'U'}
    result = ''

    nucleotide.length.times do |letter|
      result << (conversion_dict[nucleotide[letter]] || '')
    end
      result.length == nucleotide.length ? result : ''
  end
end

module BookKeeping
  VERSION = 4
end