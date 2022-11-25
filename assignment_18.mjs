

// • Store the locations in a array. Make sure the array is not in alphabetical order.
const world_places = ['Makkah','Madinah','Burj Khalifah','Palestine','Maldhives'];  

// • Print your array in its original order.
console.log(world_places);

// • Print your array in alphabetical order without modifying the actual list.
const sorted_world_places = world_places.slice(0,world_places.length).sort();


console.log(sorted_world_places);

// • Print your array in alphabetical order without modifying the actual list.
console.log(world_places);


// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log(sorted_world_places.reverse());


// • Show that your array is still in its original order by printing it again.
console.log(world_places);


// • Reverse the order of your list. Print the array to show that its order has changed.
world_places.reverse();
console.log(world_places);


// • Reverse the order of your list again. Print the list to show it’s back to its original order.
world_places.reverse();
console.log(world_places);


// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
world_places.sort();
console.log(world_places);


// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
world_places.reverse();
console.log(world_places);

