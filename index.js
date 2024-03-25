let arr = [1,2,3,3,4,4,4,5,]

console.log(arr)
console.log(arr.toString())

// let funx =  [2,4,5,6,66,6,67,7,7,4,34,23,22,2,32,2,434,4,324,33,43242,4,54,54,656,67,7,]
// console.log(funx.concat("apple"))

let have = ["friend ", "ally", " folks "];
have.pop();
have.unshift("");

console.log(have);

// console.log(have.shift("choor"))

// pop and shft are real brother
// push and unshft are real brother

// let arr = [{1,2,3,4}]

//  thapa technical

// array using contrustor

let myArr = new Array("apple", "mango", "grapes", "banana");
console.log(myArr);

// using array literal

let MyArr = ["apple", "mango", "grapes", "banana"];
console.log(MyArr);

for (let item in MyArr) {
  console.log(item);
}

// Perform an action on each element

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

number.forEach((curElement) => {
  console.log(curElement * 2);
});

//  const  doubleValue = [2,4,6,8,10]
//  doubleValue.map((CurEle) => {
//     // Create new array with transformed elements
//     console.log(CurEle * 2)
//  })

//  crud opeartion

// push(): Method that adds one and more elements to the end of the array.

const number1 = ["cows ", "dog", " cat", "sheep", "pigs"];

//  number1.forEach((curElement) => {
// Perform an action on each element
const count = number1.push("cows");
console.log(count);
console.log(number1);
// console.log(count)
//  }
//  )

// pop() : Method thats remove the last elements form the array.
const animal = ["cows ", "cat", "sheep", "pigs"];
const count1 = animal.pop("cows");
console.log(count1);
console.log(animal);

// shift(): Method that adds one or more elements to the beignning  of the array.

const myPet = ["cows ", "cat", "sheep", "pigs"];
const countable = myPet.shift("dog");
console.log(countable);
console.log(myPet);

// unshift() : Method that remove the first Element from a Array.

const myanimal = ["cows ", "cat", "sheep", "pigs"];
const counta = myanimal.shift("dog");
console.log(counta);
console.log(myanimal);

myanimal.shift(1, "goats");
console.log(myanimal);

const things = ["pencil", "book", "pen", "pen, "];

const stuff = things.lastIndexOf(1, 0);
console.log(stuff);

// searching

const months = [
  "January",
  "February",
  " March",
  "April",
  "May",
  " June",
  " July",
  "August",
  "September",
  " October",
  "November",
];

const addval = months.push("December");

console.log(addval);

console.log(months);
