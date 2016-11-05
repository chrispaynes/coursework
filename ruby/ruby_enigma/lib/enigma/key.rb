# http://red-badger.com/blog/wp-content/uploads/2015/02/wiringdiagram.png
# https://github.com/DanielVartanov/enigma-ruby/blob/master/lib/enigma/rotor_deck.rb
# https://github.com/turingschool/curriculum/blob/master/source/projects/enigma.markdown
class Key
  def initialize(key_string)
    self.rotations = create_rotations_map(key_string)
    self.reflector = rotations[:reflector]
    self.rotor_left = rotations[:rotor_left]
    self.rotor_middle = rotations[:rotor_middle]
    self.rotor_right = rotations[:rotor_right]
  end

  def rotate(rotor)
    rotor
  end

  attr_accessor :rotations
  attr_accessor :reflector
  attr_accessor :rotor_left
  attr_accessor :rotor_middle
  attr_accessor :rotor_right

  private

  def create_rotations_map(key_string)
    numbers = key_string.split('')

    rotor_numbers = numbers.each_cons(2).map do |n1, n2|
      [n1, n2].join.to_i
    end

    Hash[[:reflector, :rotor_left,
          :rotor_middle, :rotor_right].zip(rotor_numbers)]
  end
end
