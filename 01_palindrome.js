// Palindrome
// let str = "hello";

// let rev = str.split("").reverse().join("");

// if (rev == str){
//     return console.log("Palindrome")
// }

// return console.log("Not Palindrome")

//using loop(Checking the String from Last)
let str = "hello";
let rev = "";

for (let i = str.length - 1; i >= 0; i--) { 
    rev = rev + str[i];
}
if (rev == str){
    return console.log('palindrome');
}else{
    return console.log('not palindrome');
}