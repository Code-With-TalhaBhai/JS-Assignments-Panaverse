/*

More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array

*/


let car = "Ferrari";
let num = 234;
const arr = ['typescript','solidity',324,'Reactjs'];

// • Tests for equality and inequality with strings
console.log(car === "Ferrari"?true:false);
console.log('\n');


// • Tests using the lower case function
console.log(car === "ferrari"?true:false);
console.log('\n');


// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(num >= 234?true:false);
console.log('\n');


// • Tests using "and" and "or" operators
console.log(num > 546 && car == "Ferrari"?true:false);
console.log(num < 546 && car == "Ferrari"?true:false);
console.log('\n');


// • Test whether an item is in a array
console.log(arr.includes('solidity')?true:false);
console.log(arr.includes('Javascript')?true:false);