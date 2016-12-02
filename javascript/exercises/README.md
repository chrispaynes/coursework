JavaScript Exercises
--
A collection of JavaScript challenges accompanied by Mocha tests. Challenges were sourced from
[FreeCodeCamp](https://www.freecodecamp.com), [Exercism.IO](http://exercism.io), and [Codewars](https://www.codewars.com).

Installation
-
Download [MochaJS](https://mochajs.org) testing framework using ```$npm install```.

Run Tests
-
<b>Run All Exercises Tests:</b>
<br>```$ npm test``` or ```$ mocha```

<b>Run Individual Exercise Tests:</b><<br>
The test name is found on the first line of the test block within ```"describe('Test Name', function() {"```
<br>```$ npm test -- -g "Test Name"``` or ```$ mocha -g 'Test Name'``` or
<br>```$ mocha ./tests/filename_test.js```

Exercise Descriptions
-

####Arguments Optional 
Create a function that sums two arguments together. If only one argument is provided, then
return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should
return a function. Calling this returned function with a single argument will then
return the sum: var sumTwoAnd = addTogether(2); sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

<!-- ####Binary Agents 
Return an English translated sentence of the passed binary string.
The binary string will be space separated. -->

####Boo Who 
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.

####Caesars Cipher 
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on. Write a function which takes a ROT13 encoded string as input and returns a decoded string. All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

####Check for Palindromes 
Return true if the given string is a palindrome. Otherwise, return false. A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes. We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

####Chunky Monkey 
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

####Confirm the Ending 
Check if a string (first argument, str) ends with the given target string (second argument, target).

####Diff Two Arrays 
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

####DNA Pairing 
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2D array. Base pairs are a pair of AT and CG. Match the missing element to the provided character. Return the provided character as the first element in each array. For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]] The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

####Drop it 
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
Return the rest of the array, otherwise return an empty array.

####Everything Be True 
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
Remember, you can access object properties through either dot notation or [] notation.

####Factorialize a Number 
Return the factorial of the provided integer. If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. 

####Falsy Bouncer 
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

####Find the Longest Word in a String 
Return the length of the longest word in the provided sentence. Your response should be a number.

####Finders Keepers 
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

####Missing letters 
Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.
