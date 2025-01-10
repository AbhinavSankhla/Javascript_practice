// // rest parameter and spread operator in JavaScript 

// // The spread operator (...) creates a shallow copy of arrays and objects.

// //01. Spread operator: The spread operator helps us expand an iterable such as an array where multiple arguments are needed, it also helps to expand the object expressions. 
// // In cases where we require all the elements of an iterable or object to help us achieve a task, we use a spread operator.
// // Note: There can be more than one spread operator in javascript functions.

// // eg.1
// const arr1 = [10,20,30,40]
// const arr2 = [50,60,70,80]
// // const arr3 = [arr1 , arr2]
// console.log([...arr1,...arr2]);
// console.log([...arr1, 50])

//eg.2
let obj1 = {
    firstname : "virat",
    lastname : "kohli"
}
console.log({...obj1,number : 18})
console.log(obj1);
// obj1.number = 18; // assingn new key- value pair
console.log(obj1);
obj1 = { ...obj1, number: 18 }; //assign new key in obj uisng spread oprt.
console.log(obj1);


