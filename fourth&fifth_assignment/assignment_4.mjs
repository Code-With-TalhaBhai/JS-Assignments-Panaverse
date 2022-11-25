// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

// const Quote = require('inspirational-quotes');
import * as Quote from 'inspirational-quotes';


const quotation = Quote.getQuote(); // returns quote (text and author)


console.log(`${quotation.author} once said, "${quotation.text}"`);



