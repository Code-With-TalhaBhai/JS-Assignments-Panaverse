// console.clear();

import { people } from "./assignment_14.mjs"

people.push('Arshad');
people.push('Sami');


    // let length = people.length;
    // console.log(`Dear ${people[length-1]}, your presence on wedding will be appreciated`);
    // console.log(`Dear ${people[length-2]}, your presence on wedding will be appreciated`);


    people.splice(0,1,'Imran');
    people[3] = "Guru";

    people.forEach((element)=>{
        console.log(`Dear ${element}, your presence on wedding will be appreciated`);
    });

    

    // console.clear();
    const final_people = people;
    export {final_people};

    console.log('Oh! I found a bigger dinning table');
