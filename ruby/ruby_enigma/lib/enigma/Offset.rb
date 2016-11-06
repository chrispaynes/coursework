class Offset
  attr_reader :last_four_digits, :message_date_squared, :reflector_offset,
              :left_rotor_offset, :middle_rotor_offset, :center_rotor_offset

  def initialize(message_date)
    @message_date = message_date
    @message_date_squared = square_the_date
    @last_four_digits = set_last_four_squared_date_ints
    @reflector_offset = @last_four_digits[0]
    @left_rotor_offset = @last_four_digits[1]
    @middle_rotor_offset = @last_four_digits[2]
    @center_rotor_offset = @last_four_digits[3]
  end

  def square_the_date
    if @message_date.split(//).first == '0'
      return @message_date_squared = @message_date.sub!(/^0/, '').to_i**2
    end

    @message_date_squared = @message_date.to_i**2
  end

  def set_last_four_squared_date_ints
    @message_date_squared.to_s.split('').last(4).map(&:to_i)
  end
end
