/*
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/

import {show_magicians,magicians } from "./assignment_41.mjs";

// console.log(magicians);

// const magicians = ['Jack','Paul Daniels','Lionel Shrike','Harry Houdini','Jeff McBride','David Blaine'];


export function make_great(message){
for (let index = 0; index < magicians.length; index++) {
    magicians[index] = `${message} ${magicians[index]}`;
}
};


make_great("Hello, Greetings to");
show_magicians(magicians);

