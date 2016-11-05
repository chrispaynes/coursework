require_relative '../lib/enigma'
require 'minitest/autorun'
require 'date'

class EnigmaTest < Minitest::Test
  def test_it_encrypts_a_message
    e = Enigma.new
    my_message = 'this is so secret ..end..'
    output = e.encrypt(my_message, '12345', Date.today)
    assert my_message.length == output.length
  end

  def test_actually_encrypts_something
    e = Enigma.new
    my_message = 'this is so secret ..end..'
    output = e.encrypt(my_message, '12345', Date.today)
    assert my_message != output
  end
end
