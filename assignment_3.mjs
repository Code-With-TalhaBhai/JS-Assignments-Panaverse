
import PromptSync from "prompt-sync";

const prompt = PromptSync();

const name = prompt("Enter your name please? ");

const TitleCase = (name)=>{
    let element = '';
    let arr = name.split("");
    for(let index=0; arr.length > index; index++){
        if(index == 0){
            arr[index] = arr[index].toUpperCase()
        }
        if(arr[index] === ' '){
            arr[index+1] = arr[index+1].toUpperCase();
        }
        element += arr[index];
    }
    return element;

}


console.log(`Uppercase ------> ${name.toLocaleUpperCase()}`);
console.log(`Lowercase ------> ${name.toLowerCase()}`);
console.log(`TitleCase ------> ${TitleCase(name)}`);
