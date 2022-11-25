/*

Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

*/

import { magicians, show_magicians } from "./assignment_41.mjs";
import { make_great } from "./assignment_42.mjs";

console.clear();



show_magicians(magicians);

make_great();

show_magicians(magicians);
