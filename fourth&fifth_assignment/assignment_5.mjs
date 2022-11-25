

import { getQuote } from "inspirational-quotes";


const famous_name = getQuote().author;

const message = getQuote().text;

// console.log(getQuote());

console.log(`${famous_name} once said, "${message}"`);
