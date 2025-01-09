//Javascript Program To Reverse Words In A Given String
// Input: s = “geeks quiz practice code” 
// Output: s = “code practice quiz geeks”

let str = "geeks quiz practice code";
let word = str.split(" ").reverse().join(" ");

console.log(word)