// Take Home
// On your takehome-day5 branch write a program that uses functions to:

// Take a number and return the square of that number (power of 2).
// If a non-number argument is passed into the function, alert NaN and prompt for another response
// In a second function, capitalize the first letter of a string and add a period (.) to the end of the string if it doesn't already end with a period
// Create a string that will flip the position of the first and second half of a string. For example, the string “abcdef” would be returned as “defabc”. Hint: use substring.
// BONUS: If you are bored by all that, write a function that checks if a given string is a palindrome.

//********************Part 1 Return Square of number***************

function sqRoot() {
    let number = parseInt(prompt('Please enter a number.'));
    if (number == '' && number == null) { //end script if cancel button is pressed
        return;
    }
    switch (!isNaN(number)) { // is real number = true run sqrt
        case true:
            alert(Math.sqrt(number));
            break;
        case (false): // not a real number alert try agian
            alert('That is not a number! Please try agian!');
            sqRoot();
            break;
    }
}
sqRoot();