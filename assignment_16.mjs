import { final_people } from "./assignment_15.mjs";


console.log("So there's extra capacity, we can invite some more people");

final_people.unshift('Masood');

const mid = Math.floor(final_people.length/2);

final_people.splice(mid,1,'Faiz Hameed');

final_people.push('Gen. Hameed Gul')


final_people.forEach(element => {
    console.log(`Dear ${element}, your presence on wedding will be appreciated`);
});