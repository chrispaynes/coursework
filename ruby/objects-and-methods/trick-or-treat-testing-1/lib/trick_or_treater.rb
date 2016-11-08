require './lib/costume'

class TrickOrTreater
  attr_reader :bag

  def initialize(costume)
    @costume = costume
    @bag = []
  end

  def dressed_up_as
    @costume.style
  end

  def candy?
    !@bag.empty?
  end

  def candy_count
    @bag.size
  end

  def eat
    @bag.pop
  end
end
