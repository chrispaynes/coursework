class Offset
  attr_reader :last_four_digits
  attr_reader :squared_message_date

  def initialize(message_date)
    @message_date = message_date
    @squared_message_date = square_the_date
    @last_four_digits = get_last_four_squared_date_ints
  end

  def square_the_date
    message_first_char = @message_date.split(//).first

    if message_first_char == "0"
      return @squared_message_date = @message_date.sub!(/^0/, '').to_i ** 2
    else
      return @squared_message_date = @message_date.to_i ** 2
    end
  end

  def get_last_four_squared_date_ints
    @squared_message_date.to_s.split("").last(4).join().to_i
  end
end