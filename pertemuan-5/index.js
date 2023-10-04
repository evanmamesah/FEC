// //Array

// let students = ["john", "bob", "peter"];
// let numbers = [1, 2, 3, 4, 5];
// let john = ['john', 'doe', 35, true];

// console.log(students);
// console.log(numbers);
// console.log(john);
// console.log(john.length);

// //Array Index
// console.log(students[1]);
// students[1] = "jane";
// console.log(students);

// console.log(students[students.length - 1]);

// //ToString
// console.log(john.toString());
// //Join
// console.log(john.join(" "));
// console.log(john.join("#"));

// //Pop
// john.pop();
// console.log(john)

// //Push
// john.push("Good Morning");
// console.log(john);

// //Shift
// john.shift();
// john.unshift("Hello");
// console.log(john);

// //Splice
// john.splice(3,0, true);
// console.log(john);

// //Slice
// let john2 = john.slice (2, 4);
// console.log(john2);

// //Concat
// let combineArray = john.concat(numbers, john2);
// console.log(combineArray);

//Object

// const john = {
//     firstName: 'John',
//     lastName: "Doe",
//     age: 33,
//     isMarried: true,
//     grade: [90, 80, 100],
//     address: {
//         city: 'Manado',
//         province: 'Sulawesi Utara',
//         postalCode: '95371',
//     },
//     sayGreetings: function () {
//         console.log("Hello my name is" + this.firstName);
//         //Untuk mengakses properti dalam itu sendiri
//     }
// };

// //Dot Notation
// // console.log(john.firstName);
// // console.log(john.grade[2]);
// // console.log(john.address.city);
// // console.log(john.sayGreetings());

// //Bracket Notation
// console.log(john["firstName"]);
// console.log(john["grade"[2]]);
// console.log(john["addres"]["city"]);
// console.log(john["sayreetings"()]);

// john.job = "Teacher";


//Array Object
let students = [
    {
        id: 1,
        name: "John",
    },
    {
        id: 2,
        name: "Peter",
    },
    {
        id: 3,
        name: "Jack",
    },

];

// students.forEach(function(item) {
//     console.log(item);
// });

// let output =students.map(function(item) {
//     return item.name;
// });

// let output =students.filter(function(item) {
//     return item.name === "Peter";
// });

let output =students.find(function(item) {
    return item.name === "Peter";
});

console.log(output);
