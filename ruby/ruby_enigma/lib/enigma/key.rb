# http://red-badger.com/blog/wp-content/uploads/2015/02/wiringdiagram.png
# https://github.com/DanielVartanov/enigma-ruby/blob/master/lib/enigma/rotor_deck.rb
# https://github.com/turingschool/curriculum/blob/master/source/projects/enigma.markdown
class Key
  def initialize(key_string)
    split_key(key_string)
    self.reflector = rotations[:reflector]
    self.rotor_left = rotations[:rotor_left]
    self.rotor_middle = rotations[:rotor_middle]
    self.rotor_right = rotations[:rotor_right]
  end

  def rotate(rotor)
    rotor
  end

  def split_key(key_string)
    numbers = key_string.split('')
    rotor_numbers = []

    key_string.split('').each_index do |n|
      rotor_numbers << [numbers[n], numbers[n + 1]].join.to_i
    end

    self.rotations = Hash[[:reflector, :rotor_left,
                           :rotor_middle, :rotor_right].zip(rotor_numbers)]
  end

  attr_accessor :rotations
  attr_accessor :reflector
  attr_accessor :rotor_left
  attr_accessor :rotor_middle
  attr_accessor :rotor_right
end
