#JavaScript Exercises
A collection of JavaScript challenges accompanied by Mocha tests. Challenges were sourced from
[FreeCodeCamp](https://www.freecodecamp.com), [Exercism.IO](http://exercism.io), and [Codewars](https://www.codewars.com).

###Installation
Download [MochaJS](https://mochajs.org) testing framework using ```$npm install```.

###Run Tests
<b><i>Run All Exercises Tests:</b></i>
<br>```$ npm test``` or ```$ mocha```

<b><i>Run Individual Exercise Tests:</b></i><br>
The test name is found on the first line of the test block within ```"describe('Test Name', function() {"```
<br>```$ npm test -- -g "Test Name"``` or ```$ mocha -g 'Test Name'``` OR
<br>```$ mocha ./tests/filename_test.js```

##Challenges

###Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then
return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should
return a function. Calling this returned function with a single argument will then
return the sum: var sumTwoAnd = addTogether(2); sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

