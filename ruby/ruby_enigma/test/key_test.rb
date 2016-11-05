require './lib/enigma'
require 'minitest/autorun'
require_relative '../lib/enigma/key'

class KeyTest < Minitest::Test
  def test_it_is_made_from_a_key_string
    key = Key.new('41521')
    assert_equal ({ reflector: 41, rotor_left: 15,
                    rotor_middle: 52, rotor_right: 21 }), key.rotations
  end

  def test_it_stores_individual_rotations
    key = Key.new('41521')
    assert_equal 41, key.rotate(key.reflector)
    assert_equal 15, key.rotate(key.rotor_left)
    assert_equal 52, key.rotate(key.rotor_middle)
    assert_equal 21, key.rotate(key.rotor_right)
  end
end
