// var myName = " Jeff";
// var myAge = "48";
// console.log ("Hello my name is" + myName +  ". I am " + myAge + " years old.")

const myName = 'Jeff';
let myAge = '48';
// // Log out my name and age es5 way
// console.log("Hello my name is" + myName + ". I am " + myAge + " years old.");

// es6 way
console.log (`Hello, ${myName}! Your are ${myAge} years old!`);

const today = new Date();
console.log (today);
let day = today.getDate();
console.log (day);
let month = today.getMonth() + 1;
let year = today.getFullYear();
let hours = today.getHours() -12;
let time = today.getTime();

console.log (day, month, year, hours);
console.log (`${month}/${day}/${year} ${time}`);

// create a random number between 1-10
const rand = Math.floor((Math.random()*10)+1);
console.log (rand);

// alert(rand);
prompt(rand);