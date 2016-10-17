################################################################################
################################################################################

iex> i "Hello World"
# Term
#   "Hello World"
# Data type
#   BitString
# Byte size
#   11
# Description
#   This is a string: a UTF-8 encoded binary. It's printed surrounded by
#   "double quotes" because all UTF-8 encoded codepoints in it are printable.
# Raw representation
#   <<72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100>>
# Reference modules
#   String, :binary

################################################################################
################################################################################

iex> i 'Hello World'
# Term
#   'Hello World'
# Data type
#   List
# Description
#   This is a list of integers that is printed as a sequence of characters
#   delimited by single quotes because all the integers in it represent valid
#   ASCII characters. Conventionally, such lists of integers are referred to as
#   "charlists" (more precisely, a charlist is a list of Unicode codepoints,
#   and ASCII is a subset of Unicode).
# Raw representation
#   [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
# Reference modules
#   List
