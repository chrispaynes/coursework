def superfizz(range)
  str = ''
  for i in range
    if divisible?(i, 7, 3, 5) then
      puts output_statement(7, 3, 5)
    elsif divisible?(i, 7, 3) then
      puts output_statement(7, 3)
    elsif divisible?(i, 7, 5) then
      puts output_statement(7, 5)
    elsif divisible?(i, 3, 5) then
      puts output_statement(3, 5)
    elsif divisible?(i, 3) then
      puts output_statement(3)
    elsif divisible?(i, 5) then
      puts output_statement(5)
    else
      puts i
    end
  end
  str
end


def output_statement(*divisor)
  super_fizz_buzz_dict = {3 => "Fizz", 5 => "Buzz", 7 => "Super"}
  statement = ""

  divisor.each do |d|
    statement << super_fizz_buzz_dict[d]
  end

  statement
end

def divisible?(index, *divisor)
  result = []
  divisor.each do |d|
    result << index % d == 0
  end
  result.count(0) == divisor.length
end