# Calculates a 20% tip and a 6% tax on a meal price.
# The user will enter the meal price and the program will calculate tip, tax, and the total.
# The total is the meal price plus the tip plus the tax.   

# main function
def main():
    print 'Welcome to the meal calculator program'
    print   # prints blank line

    # calls modules
    mealPrice = input_meal()
    print   #prints blank line
    tip = calc_tip(mealPrice)
    tax = calc_tax(mealPrice)
    total = calc_total(mealPrice, tip, tax)
    display = print_info(mealPrice, tip, tax, total)

# gets and sets meal price
def input_meal():
    mealPrice = input("Enter meal price: ")
    return mealPrice

# calculates meal tip at 20%
def calc_tip(mealPrice):
    tip = mealPrice * 0.20
    return tip

# calculates meal tax at 6%
def calc_tax(mealPrice):
    tax = mealPrice * 0.06
    return tax

# calculates tip, tax, and total cost
def calc_total(mealPrice, tip, tax):
    total = mealPrice + tip + tax
    return total

# prints tip, tax, mealprice, and total meal price in
def print_info(mealPrice, tip, tax, total):
    print "--------------------------"
    print
    print "The meal price is: $", mealPrice
    print "The tip is: $", tip
    print "The tax is: $", tax
    print "THE TOTAL MEAL PRICE IS $", total
    print
    print "--------------------------"
    
    
# calls main
main()
