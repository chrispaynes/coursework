#This programs tracks and ouputs the number of bottles collected over 7 days, as well as the $0.10 payout for each bottle.

def main():

    endProgram = 'no'
    while endProgram == 'no':
        totalBottles = getBottles()
        totalPayout = calcPayout(totalBottles)
        printInfo(totalBottles, totalPayout)
        endProgram = raw_input('Do you want to end the program? (Enter yes or no): ')

#retrieves the total number of collected bottles
def getBottles():
    totalBottles = 0
    todayBottles = 0
    counter = 1
    while counter <= 7:
        todayBottles = input('Enter the number of bottles for today: ')
        totalBottles = totalBottles + todayBottles
        counter = counter + 1
    return totalBottles

#calculates the payout for total bottles
def calcPayout(totalBottles):
    totalPayout = 0
    totalPayout = totalBottles * .10
    return totalPayout

#displays the totalPayout and totalBottles
def printInfo(totalBottles, totalPayout):
    print 'The total number of bottles collected is: ', totalBottles
    print 'The total paid out is: $', totalPayout

#calls main function
main()
