const Typo = require("typo-js");

const dictionary = new Typo('de_DE', false, false, { dictionaryPath: "dics" });
// const dictionary = new Typo("en_US");

console.log("the word is: Vergleich");
let word = 'Vergleich';

let is_spelled_correctly = dictionary.check(word);

let array_of_suggestions = dictionary.suggest(word);

console.log(` is ${word} correct in DE? ${is_spelled_correctly}`);
console.log(` suggestion for it: ${array_of_suggestions}`);