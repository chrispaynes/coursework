class Hamming
  def self.compute(a, b)
    distance = 0

    raise ArgumentError unless a.length == b.length

    if (a != b)
      a.length.times do |i|
        distance += (a[i] == b[i]) ? 0 : 1
      end
      distance
    else
      0
    end

  end
end