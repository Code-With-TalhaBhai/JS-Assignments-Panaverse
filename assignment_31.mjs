/*
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

import { users } from "./assignment_30.mjs";

console.clear();

if(users.length){
    console.log("We have enough users");
};


users.splice(0,users.length);



if(users.length == 0){
    console.log("We need to find some users");
}