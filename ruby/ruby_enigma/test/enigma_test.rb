require './lib/enigma.rb'
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
    skip
    e = Enigma.new
    my_message = 'this is so secret ..end..'
    output = e.encrypt(my_message, '12345', Date.today)
    refute_equal my_message, output
  end
end
