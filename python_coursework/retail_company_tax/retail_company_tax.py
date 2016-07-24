# A retail company must file a monthly sales tax report listing the total sales for the month and the amount of state and county sales tax collected.
# The state sales tax rate is 4 percent and the county sales tax rate is 2 percent.
# Write a program that asks the user to enter the total sales for the month.

# The application should calculate and display the following:
    # The amount of county sales tax
    # The amount of state sales tax
    # The total sales tax (county plus state)


#main function to call other functions
def main():
    salesTotal = inputData()
    countyTaxRate = inputCountyTaxData()
    stateTaxRate = inputStateTaxData()   
    print

    countyTax = calcCounty(salesTotal, countyTaxRate)
    stateTax = calcState(salesTotal, stateTaxRate)
    totalTax = calcTotal(countyTax, stateTax)
    displayTax = printData(countyTax, stateTax, totalTax)

# gets and sets the sales total
def inputData():
    salesTotal = input('Enter sales total: ')
    return salesTotal

# inputs the countyTax rate as a decimal
def inputCountyTaxData():
    countyTaxRate = input('Enter County Tax Rate as a Decimal: ')
    return countyTaxRate

# inputs the stateTax rate as a decimal
def inputStateTaxData():
    stateTaxRate = input('Enter State Tax Rate as a Decimal: ')
    return stateTaxRate

# calculates the county tax
def calcCounty(salesTotal, countyTaxRate):
    countyTax = salesTotal * countyTaxRate
    return countyTax

# calculates the state tax
def calcState(salesTotal, stateTaxRate):
    stateTax = salesTotal * stateTaxRate
    return stateTax

# calculate the total tax
def calcTotal(countyTax, stateTax):
    totalTax = countyTax + stateTax
    return totalTax

# displays the county tax, the state tax, and the total tax
def printData(countyTax, stateTax, totalTax):
    print "The amount of county sales tax is $", countyTax
    print "The amount of state sales tax is $", stateTax
    print "The total sales tax is $", totalTax
    
main()
