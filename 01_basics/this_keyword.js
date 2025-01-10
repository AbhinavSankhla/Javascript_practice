//this keyword is refer to the current context of execution, but its value depends on how and where it is used. It doesn't always refer to the current object; instead, it depends on the execution context (how the function is called).

//The this keyword in JavaScript refers to the object it belongs to.

// const user = {
//     username : 'Abhinav',
//     num : 9600800, 
//     welcome_msg: function() {                                      
//         console.log(`${this.username}, welcome to website`) 
//     } //method of object.
// }

// user.welcome_msg(); //Abhinav, welcome to website


//using arrow function
const user = {
    username : 'Mr. Abhinav',
    num : 9600800, 
    welcome_msg: () => {                                      
        console.log(`${this.username}, welcome to website`) 
    } //method of object.
}

user.welcome_msg(); //undefined