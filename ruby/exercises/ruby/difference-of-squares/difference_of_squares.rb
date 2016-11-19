class Squares
  def initialize(num)
    @num = num
  end

  def square_of_sum
    (1..@num).reduce(:+)**2
  end

  def sum_of_squares
    (1..@num).map { |num| num**2 }.reduce(:+)
  end

  def difference
    @num == 0 ? 0 : square_of_sum - sum_of_squares
  end
end

module BookKeeping
  VERSION = 3
end