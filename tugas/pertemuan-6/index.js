let people = ["Greg", "Mary", "Devon", "James"];

// 1.
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2.
people.forEach(person => {
  console.log(person);
});

// 3.
people.shift(); 
console.log(people);

// 4.
people.pop(); 
console.log(people);

// 5.
people.unshift("Matt");
console.log(people);

// 6.
people.push("Evan");
console.log(people)

// 7.
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break;
  }
}

// 8.
let copyWithoutMaryMatt = people.slice(1, 3); 
console.log(copyWithoutMaryMatt);

// 9. 
people = ["Matt", "Mary", "Devon", "James"]; 
people.splice(2, 1, "Elizabeth", "Artie"); 
console.log(people);

// 10. 
let withBob = people.concat("Bob");
console.log(withBob); 

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1.
programming.languages.push("Go")

// 2.
programming.difficulty = 7

// 3.
delete programming.jokes

// 4.
programming.isFun = true

// 5.
programming.languages.map((language, index) => {
    console.log(`${index} - ${language}`);
});
