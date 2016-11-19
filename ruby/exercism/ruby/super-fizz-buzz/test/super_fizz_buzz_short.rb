gem 'minitest', '~> 5.2'
require 'minitest/autorun'
require 'minitest/pride'
require '../lib/super_fizz_buzz_short'

class BagTest < Minitest::Test
  def test_check_divisibility_returns_correct_boolean_with_three_divisors
    assert_equal false, divisible?(10, 3, 5, 7)
    assert_equal true, divisible?(105, 3, 5, 7)
    assert_equal true, divisible?(0, 3, 5, 7)
  end

end