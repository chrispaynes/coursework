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

####Mutations 
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array. For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case. The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y". Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

####Pig Latin 
Translate the provided string to pig latin. Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay". If a word begins with a vowel you just add "way" to the end.

####Repeat a string repeat a string 
Repeat a given string (first argument) a specific number of times (second argument). Return an empty string if the number is a negative number.

####Return Largest Numbers in Arrays 
Return an array consisting of the largest number from each provided sub-array.

####Reverse The Provided String
You may need to turn the string into an array before you can reverse it.
Your result must be a string.

####Roman Numeral Converter 
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.

####Search and Replace 
Perform a search and replace on the sentence using the arguments provided and return the new sentence. First argument is the sentence to perform the search and replace on. Second argument is the word that you will be replacing (before). Third argument is what you will be replacing the second argument with (after). NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

####Slasher Flick 
Return the remaining elements of an array after chopping off n elements from the head.
The head means the beginning of the array, or the zeroth index.

####Sorted Union 
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays. In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array. The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

####Spinal Tap Case 
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

####Steamroller 
Flatten a nested array. You must account for varying levels of nesting.

####Sum All Numbers in a Range 
Return the sum of two array numbers and all numbers between them. The lowest number will not always come first.