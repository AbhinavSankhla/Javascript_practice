// JavaScript Program to Find Sum of Even Numbers of an Array
// let arr = [1,2,3,4,5,6];
// let sum = 0

// for (i=0; i<arr.length; i++){
//     if(arr[i] % 2 === 0){
//         sum += arr[i]            
//     }
// }
// console.log(sum) //12


// JavaScript Program to write array of Even Numbers of an Array
//01. using for loop and remider 0 method 
// arr = [1,2,3,4,5,6]
// let even_arr =[];

// for (let i=0; i<arr.length; i++){
//     if(arr[i]%2 === 0){
//         arr.push(arr[i]);
//     }
// }

// console.log(even_arr)

//02. without using loop
let arr = [1, 2, 3, 4, 5, 6];
let even_arr = arr.filter(num => num % 2 === 0);
console.log(even_arr); // Output: [2, 4, 6]