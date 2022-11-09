//Display the absolute value of the number contained in the soldiersCount constant
const soldiersCount = -2309;
const result = Math.abs(soldiersCount);

console.log(result);
//=>2309


//Math has a ceil() function. Check out its documentation and write code using const nuber
const number = 923.2238;

console.log(Math.ceil(number));
//924


//Display the first and last letters of the sentence stored in the text constant:
import length from './src/string.js';

const text = 'Never forget what you are, for surely the world will not';
const result1 = `First: ${text[0]}\nLast: ${text[length(text)-1]}`;

console.log(result1);
/*
Fitrst: N
Last: t
*/


//Calculate programmatically (and not in your head) the minimum number among 3, 10, 22, -3, 0 - and display it on the screen.
const minNum = Math.min(3,10,22,-3,0);

console.log(minNum);
//-3
