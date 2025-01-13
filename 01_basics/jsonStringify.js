// // JSON.stringify() is used to convert a JavaScript object (or array) into a JSON string.
// // syntex-
// // JSON.stringify(value, replacer, space);

// // 01. object to string conversion-
// const user = {
//     firstName : 'alex',
//     lastName : 'adams'
// }
// const jsonString = JSON.stringify(user); 
// console.log(jsonString)
// console.log(typeof(jsonString))

// //convert the string back to an object-
// const parsedobj = JSON.parse(jsonString)
// console.log(parsedobj)
// console.log(typeof(parsedobj));

//02. array to string conversion-
const arr = [1,2,3,4]
const jsonString = JSON.stringify(arr)
console.log(jsonString)
console.log(typeof(jsonString))

//bonus-
// console.log(typeof(arr))  //object (array are special obect in JS)
// console.log(Array.isArray(arr)) //true (explicitly check)