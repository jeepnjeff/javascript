// On a takehome-day4 branch of your JS repository, write a program that:

// !!!!! Creates an array of things you need or want to do this weekend by collecting three todos from the user.
// !!!!!Using a for loop, change the items in the array by adding a value for how many days that item should take.
// !!!!!Hint: which data type is best suited for your todo items, based on what you will need to do to them?
// Using a while loop, find the task that will take the longest and log it to the console.
// Using a do while loop, add the string 'easy-peasy' to all the tasks other than the one that will take the longest
// Finally, alert all the tasks that have 'easy-peasy' in the todo array.


// Create array to get 3 todo for weekend

let todo = [];
let item1 = prompt("Enter 1 of 3 todos you would like to accomplish this weekend.\n (ex. Clean House");
let item2 = prompt("Enter 2 of 3 todos you would like to accomplish this weekend.\n (ex. Mow Yard");
let item3 = prompt("Enter 3 of 3 todos you would like to accomplish this weekend.\n (ex. Wash Clothes");
todo.push(item1, item2, item3);

let item = [];

for (let i = 0; i < todo.length; i++) {

    let num = Math.floor(Math.random() * 10) + 1;
    item.push(item);
    let largest = [todo[i], num];
    console.log([largest]);
}