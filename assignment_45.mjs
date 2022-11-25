/*
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/



function car_function(obj){
    // const car_obj = obj:{manufacturer,model_name,...obj};
    const car_obj = obj;
    // return {manufacturer,model_name,obj};
    return car_obj;
}


console.log(car_function({manufacturer:'Toyotta',model_name:'Fortuner'}));
console.log(car_function({manufacturer:'Toyotta',model_name:'v8',color:'Black',model:2018}));
console.log(car_function({manufacturer:'MG',model_name:'MG-5', color: 'Yellow'}));