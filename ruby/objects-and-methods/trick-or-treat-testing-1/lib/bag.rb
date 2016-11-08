class Bag
  attr_reader :candies

  def initialize
    @candies = []
  end

  def empty?
    @candies.empty?
  end

  def count
    @candies.count
  end

  def <<(candy)
    @candies << candy
  end

  def contains?(candy_type)
    @candies.each do |candy|
      return true if candy.type == candy_type
    end

    false
  end
end
