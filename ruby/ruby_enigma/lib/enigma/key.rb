# http://red-badger.com/blog/wp-content/uploads/2015/02/wiringdiagram.png
# https://github.com/DanielVartanov/enigma-ruby/blob/master/lib/enigma/rotor_deck.rb
# https://github.com/turingschool/curriculum/blob/master/source/projects/enigma.markdown
class Key
  def initialize(key_string)
    @key_string = key_string
    @rotations = map_keys_to_rotors
    @reflector = rotations[:reflector]
    @rotor_left = rotations[:rotor_left]
    @rotor_middle = rotations[:rotor_middle]
    @rotor_right = rotations[:rotor_right]
  end

  def rotate(rotor)
    rotor
  end

  attr_reader :rotations
  attr_reader :reflector
  attr_reader :rotor_left
  attr_reader :rotor_middle
  attr_reader :rotor_right

  private

  def split_key_string
    @key_string.split('').each_cons(2).map do |n1, n2|
      [n1, n2].join.to_i
    end
  end

  def map_keys_to_rotors
    Hash[[:reflector, :rotor_left,
          :rotor_middle, :rotor_right].zip(split_key_string)]
  end
end