//  

// answer 1

// Taking input from the user
var taif = prompt("Enter a character (number or string):");

// Getting the ASCII code of the first character in the input
var charCode = taif.charCodeAt(0);

// Checking whether the input is a number, uppercase letter, or lowercase letter
if (charCode >= 48 && charCode <= 57) {
    document.write("The input is a number.");
} else if (charCode >= 65 && charCode <= 90) {
    document.write("The input is an letter.");
} else if (charCode >= 97 && charCode <= 122) {
        document.write}



// answer 2


// Taking input from the user
var integer1 = parseInt(prompt("the input number"));
var integer2 = parseInt(prompt("the input number"));

// Comparing and displaying the result
if (integer1 > integer2) {
    document.write(integer1 + " is larger than " + integer2);
} else if (integer2 > integer1) {
    document.write(integer2 + " is larger than " + integer1);
} else {
    document.write("Both integers are equal.");

    // answer 3

    // Taking input from the user
var was = parseFloat(prompt("Enter a number:"));

// Checking and displaying the result
if (was > 0) {
    document.write( " The number is positive.");
}
 else if (was< 0) {
    document.write( " The number is  negative .");
} 
else {
    document.write("The number is zero.");
}
}

// answer 4

// Taking input from the user
var where = prompt("Enter a single character:").toLowerCase();

// Checking if the input is a vowel and displaying the result
if (where.length === 1 && "aeiou".indexOf(where) !== -1) {
    document.write("True, it is a vowel.");
} else {
    document.write("False, it is not a vowel.");
}


// answer 5 

// a. Store correct password in a JS variable
var correctPassword = "secure123";

// b. Asks the user to enter his/her password
var were = prompt("Enter your password:");

// c. Validate the two passwords
// i. Check if the user has entered a password
if (!were) {
    document.write("Please enter your password.");
}
 else {
    // ii. Check if both passwords are the same
    if (were === correctPassword) {
        document.write("Correct! The password you entered matches the original password.");
    } else {
        document.write("Incorrect password.");
    }
}


// answer 6 

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "evening";
} else {
    greeting = "night";
}




// answer 7


// Taking input from the user
var input = parseInt(prompt("Enter the time in 24-hour format:"));

// Implementing different cases using if, else, and else if statements
if (Input >= 1111 && Input < 1200) {
    document.write("Good morning!");
} else if (Input >= 1200 && Input < 1700) {
    document.write("Good afternoon!");
} else if (Input >= 1700 && Input < 2100) {
    document.write("Good evening!");
} else if (Input >= 2100 && Input <= 2359) {
    document.write("Good night!");
} else {
    document.write("Invalid input. Please enter a valid 24-hour clock time.");
}







