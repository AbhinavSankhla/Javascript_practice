// console.log(3+2+"7");


// Hoisting eg 2
// function codeHoist() {
//     a = 10;
//     let b = 50;
// }
// codeHoist();

// console.log(a); // 10
// console.log(b); // ReferenceError : b is not defined

// const a ={}; 
// const b = {key: 100}; 
// const c = {key: 200}; 

// a[b]=100; 
// a[c]=200; 

// console.log(a[b]);

//var(redeclare + update), let(update) and const(nothing).
// const a = 10;
// console.log(++a);

//Functions in JS 
// function add(a,b) {
//     sum = a+b;
//     console.log(sum)
// }

// const add = (a,b) =>{
//     sum = a+b;               // or return a+b (explicit return)
//     console.log(sum)
// }
// add(5,6)


// //implicit return
// const add = (num1,num2) => num1 + num2


// Q. what is outpur?
const arr =['a','b','c'];

arr.slice(0,1)
// arr.splice(0,1);
// arr.unshift('d')

console.log(arr)  //[ 'd', 'b', 'c' ]