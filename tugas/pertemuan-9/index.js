// Array Destructuring Dengan Default Value
const colors = ['Red', 'Green'];

const [firstColor, secondColor] = colors;
console.log(firstColor); // Output: "Red"
console.log(secondColor);   // Output: "Green"

// Object Destructuring Dengan Default Value
const person = { nama: 'Arthur' };

const { nama, usia } = person;
console.log(nama); // Output: "Arthur"
console.log(usia); // Output: undefined

// Array Destructuring dengan Rest Operator
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// Object Destructuring dengan Rest Operator:
const book = { judul: 'The Lord of the Rings', penulis: 'John Ronald Reuel Tolkien', tahun: 1954 };

const { judul, ...lainnya } = book;
console.log(judul); // Output: "The Lord of the Rings"
console.log(lainnya); // Output: { penulis: 'John Ronald Reuel Tolkien', tahun: 1954 }