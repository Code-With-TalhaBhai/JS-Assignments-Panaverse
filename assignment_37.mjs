/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message,
 and a shirt of any size with a different message.
*/




function make_shirt(size,message){
    size = size || 'large'; // default value
    message = message || 'I Love Javascript'; // default value

    console.log(`Size is ${size}`);
    console.log(`Message is: ${message}`);
}


make_shirt('Small','C language is best to understand programming fundamentals');
make_shirt();