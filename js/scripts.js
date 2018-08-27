// Day 2 Class Work

// var myName = " Jeff";
// var myAge = "48";
// console.log ("Hello my name is" + myName +  ". I am " + myAge + " years old.")
// const myName = 'Jeff';
// let myAge = '48';
// // Log out my name and age es5 way
// console.log("Hello my name is" + myName + ". I am " + myAge + " years old.");
// es6 way
// console.log(`Hello, ${myName}! Your are ${myAge} years old!`);

// const today = new Date();
// console.log(today);
// let day = today.getDate();
// console.log(day);
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

// Day 3 Class Work
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


// Day 3 Switch Statement
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


// Asks if the user is over 18
// If the user is over 18, allow them to proceed, otherwise alert the user that they are not old enough.
// Now that all your users at this point are at least 18, ask if they are less than 80 years old.
// Now ask the users who are between 18 and 80 if they like Star Wars. If they are over 80, ask if they like prunes.
// If they say they don't Star Wars, end the program. In all other cases, alert them with a message.

function agePrompt() {
    let age = prompt('Are you over 18 years old?\nYes or No');
    console.log(age);


    switch (true) {
        case age == 'yes' || age == 'Yes' || age == 'y' || age == 'Y':
            let less = prompt('Are you less then 80 years old?\nYes or No');
            console.log(less);
            switch (true) {
                case less == 'no' || less == 'No' || less == 'n' || less == 'N':
                    alert('You Must like prunes!');
                    agePrompt();
                    break;
                case less == 'yes' || less == 'Yes' || less == 'y' || less == 'Y':
                    prompt('Do you like Star Wars?');
                    break;
                case less == 'yes' || less == 'Yes' || less == 'y' || less == 'Y':

                    prompt('You are wonderful human!')
                    agePrompt();
                case less == 'no' || less == 'No' || less == 'n' || less == 'N':
                    alert('Die you Rebel bastard!')
                    agePrompt();
            }
        case age == 'no' || age == 'No' || age == 'n' || age == 'N':
            alert('Sorry your not old enough to play.');
            break;
        case age == '':
            agePrompt();
            break;

        default:
            alert('Please enter a valid answer');
            agePrompt();
    }
}
agePrompt();