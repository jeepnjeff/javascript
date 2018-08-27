// !!!!!!!!!!!!!!!!!!!!Day 2 Class Work!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// var myName = " Jeff";
// var myAge = "48";
// console.log ("Hello my name is" + myName +  ". I am " + myAge + " years old.")
// const myName = 'Jeff';
// let myAge = '48';git 
// // Log out my name and age es5 way
// console.log("Hello my name is" + myName + ". I am " + myAge + " years old.");
// es6 way
// console.log(`Hello, ${myName}! Your are ${myAge} years old!`);

// const today = new Date();
// console.log(today);
// let day = today.getDate();
// console.log(day);gti 
// let month = today.getMonth() + 1;
// let year = today.getFullYear();
// let hours = today.getHours() - 12;
// let time = today.getTime();

// console.log(day, month, year, hours);
// console.log(`${month}/${day}/${year} ${time}`);

// // create a random number between 1-10
// const rand = Math.floor((Math.random() * 10) + 1);
// console.log(rand);

// // alert(rand);
// prompt(rand);


// !!!!!!!!!!!Day 3 Class Work!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// === Strict comparrison
// == loose compairison
// ! Not
// !== strict not compairison
// != loose not compairison
// > greater then 
// < less than 
// >= greater then or equal too
// <= less than or equal too

// const myNumber = 2
// const userInput = prompt('please enter number')
// if (1 == userInput ) {
//     console.log ("Yoo baby");
// // console.log (!true);
// } else{
//     console.log ("else yoo baby");
// }

// && = and 
// || pipes mean "or"
// const userInput = prompt('please enter number')
// if (userInput == 1 || userInput == 5 || userInput == 15 ) {
//     console.log("Yoo baby");
// } else {
//     console.log("else yoo baby");
// }

// && = "and" 
// || pipes mean "or"
// const userInput = prompt('Please enter number')
// if (userInput > 5 && userInput < 10) {
//     console.log("Yoo baby");
// } else {
//     console.log("else yoo baby");
// }
// day 3 else if statements
// if (userInput >= 5 ) {
//     console.log ('Number is greater then five');
// } else if (userInput < 5 ) {
//     console.log ('number is less then five');
// } else if (userInput ==='') {
// console.log ('user did not enter anything');
// } else {
//     console.log ('User did not enter a number')
// }

// !!!!!!!!!!!!!!!!Day 3 Switch Statement!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const today = new Date().getDay();
// console.log(today);

// switch (today) {
//     case 0:
//         console.log('Sunday');
//         break;
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
// }

// // Day 3 Math
// const addition = 1 + 1;
// const subtraction = 2 - 1;
// const multiply = 2 * 2;
// const divide = 10 / 2;
// const remainder = 11 % 3;
// console.log(addition);
// console.log(subtraction);
// console.log(multiply);
// console.log(divide);
// console.log(remainder);

// let myNum = 1;
// for (let i = 1; i <= 20; i++) {

// console.log(i);
// }


// let myNum = 5;
// myNum += 3;
// myNum -= 1;
// myNum *= 5;
// // myNum %= 5;
// console.log (myNum);


//!!!!!!!!!!!!!!Day 4 class work!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let myArray = ['Red', 'Blue', 'Green', 'Purple', 'Black', ' Gray', 'White'];
// let red = myArray[0];
// console.log (myArray[1]);
// console.log (myArray.length);
// let about = ['Jeff', 22, 'the sky is blue', true];
// console.log (about);
//Array minipulation
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// nums.push (10); //adds to end of array !!!!!!!!!!!!!!
// nums.unshift(0); //adds to begining of array
// nums.pop(); //removes end of array !!!!!!!!!!!!!!!!!!
// nums.shift();// removes begining item of array
// nums.splice(6);// removes item after 6 1-6 show!!!!!!!!!!!!!!!!!!!!!!!!!!!
// nums.splice(6,1)// remove item 7 moves to 6 then removes 1 after!!!!!!!!!!!!!!!
// nums.splice(2, 4); //keeps 1-2 removes 6 items after removes items in middle of array!!!!!!!!!!!!!!!!!!!!!!
// let slice = nums.slice(3);// removes first 3 items
// let slice = nums.slice(2?, 5);
// console.log(nums);
// console.log(myArray.indexOf('Green'));//tells what number is in green spot
// let color = myArray.indexOf('Green');
// console.log(myArray[color]);// alloows you to find green in array
// myArray.splice(color);
// let lastIndex = myArray.lastIndexOf('Red');!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log (color, 1);
// console.log(myArray);
// console.log(nums);
// console.log (lastIndex);
// console.log(myArray.reverse());
// console.log(myArray.sort());

// Day 4 LOOPS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let num = 0;
// while (num<10){
//     num++;
// }
// for (let i=0; i<10; i++) {
//     console.log(i);
// }

// do {
// num++;
//     console.log(num)
// } while (num<10);

let myFavoriteMovies = [];
let firstFavorite = ['Alien',"1979"];
let secondFavorite = ['Predator', "1987"];
let ThirdFavorite = ['Star Wars', "1976"];
myFavoriteMovies.push(firstFavorite,secondFavorite,ThirdFavorite);
// console.log (myFavoriteMovies[1][1]);
let movieYears = [];
// movieYears.push(myFavoriteMovies[0][1], myFavoriteMovies[1][1], myFavoriteMovies[2][1]);
for (let i=0; i<myFavoriteMovies.length; i++){
movieYears.push(myFavoriteMovies[i][1]);
}
console.log(movieYears);