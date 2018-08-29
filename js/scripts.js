// On a takehome-day4 branch of your JS repository, write a program that:

// !!!!! Creates an array of things you need or want to do this weekend by collecting three todos from the user.
// !!!!!Using a for loop, change the items in the array by adding a value for how many days that item should take.
// !!!!!Hint: which data type is best suited for your todo items, based on what you will need to do to them?
// Using a while loop, find the task that will take the longest and log it to the console.
// Using a do while loop, add the string 'easy-peasy' to all the tasks other than the one that will take the longest
// Finally, alert all the tasks that have 'easy-peasy' in the todo array.


// Create array to get 3 todo for weekend

// let todo = [];
// let item1 = prompt("Enter 1 of 3 todos you would like to accomplish this weekend.\n (ex. Clean House");
// let item2 = prompt("Enter 2 of 3 todos you would like to accomplish this weekend.\n (ex. Mow Yard");
// let item3 = prompt("Enter 3 of 3 todos you would like to accomplish this weekend.\n (ex. Wash Clothes");
// todo.push(item1, item2, item3);

// let item = [];

// for (let i = 0; i < todo.length; i++) {

//     let num = Math.floor(Math.random() * 10) + 1;
//     item.push(item);
//     let largest = [todo[i], num];
//     console.log([largest]);
// }
// TODO: Takehome day 4
let todos = [];
let todo1 = prompt("Hey there, what you doing?", "Eat Cheese.");
let todo2 = prompt("Hey there, what you doing?", "Eat Cheese.");
let todo3 = prompt("Hey there, what you doing?", "Eat Cheese.");

let todoOneArray = [todo1];
let todoTwoArray = [todo2];
let todoThreeArray = [todo3];

todos.push(todoOneArray, todoTwoArray, todoThreeArray);

for (let i = 0; i < todos.length; i++) {
    let timeframe = prompt(`How long should ${todos[i][0]} take? (Please provide in days)`, "1");
    let transformed = parseInt(timeframe);
    if (!isNaN(transformed)) {
        todos[i].push(transformed);
    } else {
        todos[i].push(1); //Edge Casing: catching potential errors for your user.
    };
}

let n = 0;
let max = 0;
while (n < todos.length) {
    if (max < todos[n][1]) {
        max = todos[n][1];
    }
    n++;
};

let m = 0;
do {
    if (todos[m][1] === max) {
        console.log(todos[m]);
    } else {
        todos[m].push("easy-peasy");
        alert(todos[m]);
    }
    m++;
} while (m < todos.length);


console.log(parseInt("hello world"));
isNaN(); //How you evaluate if somehting is NOT a number.