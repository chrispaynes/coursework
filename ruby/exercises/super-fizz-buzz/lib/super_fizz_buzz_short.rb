superfizz(range)
for num in range do
  str = ''
  str << 'Super' if num % 7 == 0
  str << 'Fizz' if num % 5 == 0
  str << 'Buzz' if num % 3 == 0
  puts str.empty? ? num : str
end
end
