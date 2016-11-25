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
