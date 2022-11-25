// Personal Message: Store a person’s name in a variable, and print a message to that person.
//  Your message should be simple, such as, “Hello Eric,
//   would you like to learn some Python today?”

// var prompt = require('prompt-sync')();
import PromptSync from 'prompt-sync';

const prompt = PromptSync();

var name = prompt('What is your name? ');

console.log(`"Hello ${name}, would you like to learn some Python today"`);