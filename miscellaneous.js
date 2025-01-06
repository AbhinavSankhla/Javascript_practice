// console.log(3+2+"7");

//Hoisting
// console.log(a); //undefined
// var a = 5;
// console.log(a); //5

const a ={}; 
const b = {key: 100}; 
const c = {key: 200}; 

a[b]=100; 
a[c]=200; 

console.log(a[b]);

//var(redeclare + update), let(update) and const(nothing).
// const a = 10;
// console.log(++a);

//Functions in JS 
// function add(a,b) {
//     sum = a+b;
//     console.log(sum)
// }

// const add = (a,b) =>{
//     sum = a+b;
//     console.log(sum)
// }
// add(5,6)

