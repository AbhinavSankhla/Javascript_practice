// 01. The setTimeout function is used to execute a piece of code or a function once after a specified delay (in milliseconds).
// setTimeout(()=>{
//     console.log('hello')
// },2000)
// console.log('hi') 


// 02. The setInterval function is used to repeatedly execute a piece of code or function at regular intervals (in milliseconds).
// setInterval(() => {
//     console.log("Hello every 1 second");
// }, 1000); 


// 03. The clearInterval function is used to stop an interval created by setInterval. It takes the interval ID (returned by setInterval) as an argument.
let counter = 0;
const intervalId = setInterval(() => {
    console.log("Counter:", counter);
    counter++;
    if (counter === 5) {
        clearInterval(intervalId); // Stops the interval after 5 iterations
        console.log("Interval stopped!");
    }
}, 1000); // Executes every 1 second


