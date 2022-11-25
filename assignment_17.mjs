import { final_people } from "./assignment_15.mjs";

console.log('Our new table would not arrive on time, so we space of only two peoples');

console.log('');

const obj = {
    rand1: 0,
    person1: '',
    rand2: 0,
    person2: ''
}


function randNumbers(){

    let rand1 = Math.floor(Math.random()*final_people.length);
    let rand2 = Math.floor(Math.random()*final_people.length);

    if(rand1 === rand2){
        while(rand1 === rand2){
            rand2 = Math.floor(Math.random()*final_people.length)+1;
        }
    };

    obj.rand1 = rand1;
    obj.person1 = final_people[rand1];
    obj.rand2 = rand2;
    obj.person2 = final_people[rand2];

    return obj;
}

randNumbers();


console.log(`Sorry ${obj.person1}, our dinning table is full, so you're not invited anymore`);
console.log(`Sorry ${obj.person2}, our dinning table is full, so you're not invited anymore`);

if(obj.rand1 > obj.rand2){
    final_people.splice(obj.rand1,1);
    final_people.splice(obj.rand2,1);
}else{
    final_people.splice(obj.rand2,1);
    final_people.splice(obj.rand1,1);
}

console.log('');


final_people.forEach(element => {
    console.log(`${element}, you're still invited, we're waiting for you`)
});

export {final_people as invited_poeple};

// console.log(randNumbers());
// console.log(rand1,rand2)