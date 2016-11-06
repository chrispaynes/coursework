require 'minitest/autorun'
require '../lib/enigma/Offset'

class OffsetTest < Minitest::Test
  def test_it_squares_the_numeric_date_form
    offset = Offset.new("110516")
    assert_equal 12213786256, offset.squared_message_date
  end

  def test_it_squares_the_numeric_date_form_with_a_leading_zero
    offset = Offset.new("020315")
    assert_equal 412699225, offset.squared_message_date
  end

  def test_it_finds_the_last_four_digits
    offset = Offset.new("123416")
    assert_equal 9056, offset.last_four_digits
  end
end


# The Offsets
#
# The date of message transmission is also factored into the encryption
#
# Consider the date in the format DDMMYY, like 020315
# Square the numeric form (412699225) and find the last four digits (9225)
#
# The first digit is the "A offset" (9)
# The second digit is the "B offset" (2)
# The third digit is the "C offset" (2)
# The fourth digit is the "D offset" (5)