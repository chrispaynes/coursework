# Looping Dice simulation game between two players.
# Each player receives a randomized integer.
# The player with the largest integers wins, unless there's a tie.

import random

# main function
def main():
    print
    # initializes variables
    endProgram = 'no'
    playerOne = 'NO NAME'
    playerTwo = 'NO NAME'  

    # calls inputNames
    playerOne, playerTwo = inputNames(playerOne, playerTwo)


    # while loop to run program again
    while endProgram == 'no':

        # initializes variables
        winnerName = 'NO NAME'
        p1number = 0
        p2number = 0

        # calls rollDice
        winnerName = rollDice(p1number, p2number, playerOne, playerTwo, winnerName)

        # calls displayInfo
        displayInfo(winnerName)

        endProgram = raw_input('Do you want to end program? (Enter yes or no): ')


# gets and sets players names
def inputNames(playerOne, playerTwo):
    playerOne = raw_input('Enter A Name for Player #1: ')
    playerTwo = raw_input('Enter A Name for Player #2: ')

    return playerOne, playerTwo

# generates random values
def rollDice(p1number, p2number, playerOne, playerTwo, winnerName):
    p1number = random.randint(1, 6)
    p2number = random.randint(1, 6)

    if p1number > p2number:
        winnerName = playerOne + ' WINS!'
    elif p1number == p2number:
        winnerName = 'IT\'S A TIE'
    else:
        winnerName = playerTwo + ' WINS!'
    return winnerName
        
# outputs the winner's name
def displayInfo(winnerName):
    print winnerName

# calls main
main()
