

import PromptSync from "prompt-sync";


const propmt = PromptSync();

const fav_number = propmt("What's your favourite number: ");


const message = `My favourite number is ${fav_number} and it's very lucky for me.`;


console.log(message);