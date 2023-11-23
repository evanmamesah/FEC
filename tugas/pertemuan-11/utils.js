// let fullName = "John Doe";

// let numbers = [1, 2, 3, 4, 5];

// let john = {
//     fullName: "John Doe",
//     age: 30,
//     address: "Manado",
// };

// function greetings() {
//     console.log("Hello World");
// }

// function helloWorld() {
//     console.log("Hello Export Default");
// }

// export { fullName, numbers, john, greetings };

// export default helloWorld;

console.log("Proses 1");
console.log("Proses 2");
console.log("Proses 3");
console.log("Proses 4");

//Async

// Async terdiri dari 2:
// 1. Parallel
console.log("Proses 1");
setTimeout (()=> {
    console.log("Proses 2");
}, 3000);
setTimeout (()=> {
    console.log("Proses 3");
}, 4000);
    console.log("Proses 4");

// 2. Concurrent
setTimeout(()=>{
    console.log("Proses 1");
    setTimeout(()=>{
        console.log("Proses 2");
        setTimeout(()=> {
            console.log("Proses 3");
            setTimeout(()=> {
                console.log("Proses 4");
            }, 3000)
        },3000)
    }, 3000)
}, 3000)