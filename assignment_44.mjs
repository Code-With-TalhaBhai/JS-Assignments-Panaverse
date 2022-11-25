/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/



function make_sandwich(arr){
    // console.log(`The sandwich should contain ${arr[0]}, ${arr[1]} and ${arr[2]}`);
    process.stdout.write('The sandwich should contain:');
    arr.forEach((element,index) => {
        arr.length == (index+1) ? process.stdout.write(`and ${element}.`): process.stdout.write(` ${element},`);
    });
    console.log('');
}




make_sandwich(['salad','meat','mayonisse']);

make_sandwich(['Ketchup','Chicken','Sauce']);

make_sandwich(['Tikka','Mustard','Cheese']);