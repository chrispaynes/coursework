require 'Prime'

class Sieve
  def initialize(limit)
    @limit = limit
  end

  def primes
    (2..@limit).to_a.select {|n| Prime.prime?(n)}
  end
end

module BookKeeping
  VERSION = 1
end