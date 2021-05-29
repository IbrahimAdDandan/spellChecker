const Typo = require("typo-js");

// var dictionary = new Typo(['de_DE', false, false, { dictionaryPath: "typo/dictionaries" }]);
const dictionary = new Typo("en_US");

let is_spelled_correctly = dictionary.check("hotel");

console.log(is_spelled_correctly);