# http://red-badger.com/blog/wp-content/uploads/2015/02/wiringdiagram.png
# https://github.com/DanielVartanov/enigma-ruby/blob/master/lib/enigma/rotor_deck.rb
# https://github.com/turingschool/curriculum/blob/master/source/projects/enigma.markdown
class Key

  def initialize(key_string)
    split_key(key_string)
    self.reflector = rotations[0]
    self.rotor_left = rotations[1]
    self.rotor_middle = rotations[2]
    self.rotor_right = rotations[3]
  end
  
  def rotate(rotor)
    rotor
  end

  def split_key(key_string)
    nums_arr = key_string.split("")
    ints_array = []
  
    (nums_arr.length - 1).times do |n|
      ints_array << [nums_arr[n], nums_arr[n + 1]].join().to_i
    end

    self.rotations = ints_array
  end
  
    attr_accessor :rotations
    attr_accessor :reflector
    attr_accessor :rotor_left
    attr_accessor :rotor_middle
    attr_accessor :rotor_right

end
