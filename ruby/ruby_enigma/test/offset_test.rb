require 'minitest/autorun'
require './lib/enigma/Offset'

class OffsetTest < Minitest::Test
  def test_it_squares_the_numeric_date_form
    offset = Offset.new('110516')
    assert_equal 12_213_786_256, offset.square_the_date
  end

  def test_it_squares_the_numeric_date_form_with_a_leading_zero
    offset = Offset.new('020315')
    assert_equal 412_699_225, offset.message_date_squared
  end

  def test_it_finds_the_last_four_digits
    offset = Offset.new('123416')
    assert_equal [9, 0, 5, 6], offset.last_four_digits
  end

  def test_it_maps_the_last_four_digits_to_specific_offsets
    offset = Offset.new('123416')
    assert_equal 9, offset.reflector_offset
    assert_equal 0, offset.left_rotor_offset
    assert_equal 5, offset.middle_rotor_offset
    assert_equal 6, offset.center_rotor_offset
  end
end
