// Hoisting in JavaScript is the behavior where variable and function declarations are moved to the top of their containing scope during compilation, before the code is executed. This means you can reference variables and functions before they are declared in the code. 
// However, only declarations are hoisted, not initializations.

// eg. 1
// console.log(a); //undefined
// console.log(b); //can't access before initialization
// var a = 5;
// let b = 10;
// console.log(a); //5

// eg. 2
greet() //good morning

function greet() {
    console.log("Good morning")
}




// How Hoisting Works
// Variables
// When a variable is declared using var, its declaration is hoisted, but the initialization stays in place.
// Variables declared with let or const are also hoisted, but they are placed in a "temporal dead zone" (TDZ) and are not accessible until their declaration is encountered during execution.
// Functions
// Function declarations are hoisted completely, meaning the entire function is moved to the top of the scope.
// Function expressions are not hoisted in the same way because only the variable (e.g., the identifier) is hoisted, but the assignment happens during execution.

// bonus- 
// JavaScript Execution Process
// JavaScript is technically an interpreted language, but modern JavaScript engines like V8 (used in Chrome and Node.js) use a Just-In-Time (JIT) compilation process to optimize execution. This means JavaScript goes through two phases:

// Creation/Compilation Phase (before execution begins):

// The JavaScript engine scans the code and sets up the execution context.
// During this phase:
// Variables are declared (but not initialized unless var is used).
// Function declarations are fully hoisted (declared and initialized with their definitions).
// Memory is allocated for all variables and functions.
// Execution Phase:

// The code is executed line by line, and variables are assigned their values during this phase.
