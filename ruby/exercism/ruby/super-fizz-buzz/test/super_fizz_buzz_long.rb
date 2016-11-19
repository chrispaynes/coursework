gem 'minitest', '~> 5.2'
require 'minitest/autorun'
require 'minitest/pride'
require '../lib/super_fizz_buzz_long'

class BagTest < Minitest::Test
  def test_check_divisibility_returns_correct_boolean_with_three_divisors
    assert_equal false, divisible?(10, 3, 5, 7)
    assert_equal true, divisible?(105, 3, 5, 7)
    assert_equal true, divisible?(0, 3, 5, 7)
  end

  def test_check_divisibility_returns_correct_boolean_with_two_divisors
    assert_equal true, divisible?(35, 5, 7)
    assert_equal true, divisible?(21, 3, 7)
    assert_equal true, divisible?(15, 3, 5)
    assert_equal false, divisible?(36, 5, 7)
    assert_equal false, divisible?(22, 3, 7)
    assert_equal false, divisible?(16, 3, 5)
  end

  def test_check_divisibility_returns_correct_boolean_with_one_divisor
    assert_equal true, divisible?(56, 7)
    assert_equal true, divisible?(40, 5)
    assert_equal true, divisible?(30, 3)
    assert_equal false, divisible?(54, 7)
    assert_equal false, divisible?(39, 5)
    assert_equal false, divisible?(29, 3)
  end

  def test_output_statement_returns_correct_statement_with_three_divisors
    assert_equal "SuperFizzBuzz", output_statement(7, 3, 5)
  end

  def test_output_statement_returns_correct_statement_with_two_divisors
    assert_equal "FizzBuzz", output_statement(3, 5)
    assert_equal "SuperFizz", output_statement(7, 3)
    assert_equal "SuperBuzz", output_statement(7, 5)
  end

  def test_output_statement_returns_correct_statement_with_one_divisor
    assert_equal "Fizz", output_statement(3)
    assert_equal "Buzz", output_statement(5)
    assert_equal "Super", output_statement(7)
  end

end