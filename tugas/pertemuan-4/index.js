//JavaScript Function
// function greetings() {
//     return "Hello";
// }

// const greetings = function (fullName) { //Parameter
//     console.log(age); //Local
//     const job = "teacher";
//     if (job === teacher) {
//         const address = "Manado";//Blok, lebih dalam lagi... ruang lingkup semakin mengecil
//     }
//     return "Hello";
// };
// const age = 17; //Global

// console.log(greetings("John")); //argument

//JavaScript Function
// console.log(greetings());
// function greetings() {
//     return "Hello";
// }

//IIFE (Immediately Invoked Function Expressions)
//Anonymous Function

// (function() {
//         console.log("Hello IIFE");
//     })();
    
//Callback Function... Parameter(variabel didalam funciton definition) 

function createGreetings(name, callback){
    const greetings = "Hello " + name;
    callback(greetings);
}

// function logGreetings(greetings){
//     console.log(greetings);

// }
// createGreetings("John", logGreetings);

createGreetings("John"), function (greetings) {
    console.log(greetings);
};
// createGreetings("John", function(greetings){
//     console.log(greetings);
// });

// Callback adalah function yang berada dalam parameter