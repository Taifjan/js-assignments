///answer 1


document.write('Sum of 3 and 5 is 8')



// answer 2


document.write('<p> subtract of 5 and 3 is 2 </p> <p> Multiply of 3 and 5 is 15 </p> <p> Division of 3 and 5 is 2 </p> ')


//answer 3

// a. Declare a variable
let myVariable;

// b. Show the value of the variable in the browser
document.write("Value after variable declaration is: " + myVariable + "<br>");

// c. Initialize the variable with some number
myVariable = 5;

// d. Show the value of the variable in the browser
document.write("Initial value: " + myVariable + "<br>");

// e. Increment the variable
myVariable++;

// f. Show the value of the variable in the browser
document.write("Value after increment is: " + myVariable + "<br>");

// g. Add 7 to the variable
myVariable += 7;

// Showing the final value after adding 7
document.write("Value after adding 7 is: " + myVariable);

// j. Show the value of the variable in the browser after decrementing
document.write("Value after decrement is: " + myVariable + "<br>");


// k. Show the remainder after dividing the variable’s value by 3
let remainder = myVariable % 3;

// l. Output: “The remainder is: 0”
document.write("The remainder is: " + remainder + "<br>" );

///answer 4

var was = 600*5
document.write('Total cost to buy 5 tickets to a movie is'+ was +'pkr' )

//answer 5



//answer 7


document.write("<p> price of item 1 is 100 </p> <p> Price of item 2 is 300 <p/><p>Order quantity of item 1 is 4 </p> <p> order quantity of item 2 is 3 </p> <p> Total cose of your order is 2300 ")


///answer 8

// Store total marks and marks obtained by the student

 var totalMarks = 1000;
var marksObtained = 750;

// Compute the percentage
var percentage = (marksObtained / totalMarks) * 100;

// Display the result in the browser
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%");




//answer 9

// document.write("<p> amount of 1 us dollar is 279 </p> <p> amount of 10 US dollar is 2790 </p> <p> <p> amount of 1 saudi riyal is 74 </p> <p> amount of 10 saudi riyal is 740 </p> Total currency in pkr is 3530")

document.write("<p> Total currency in pkr is 3530 </p>")



///answer 10

document.write("Result: " + (((number + 5) * 10) / 2));


///answer 11

// Store the current year
var currentYear = new Date().getFullYear();

// Store their birth year
var birthYear = 1990; // You can replace this with the actual birth year

// Calculate their possible ages
var age1 = 2024- 2006;
var age2 = age1 - 1;

// Output the ages to the screen
document.write("They are either " + age1 + " or " + age2 + " years old.");


///answer 12


// Store your favorite snack
var favoriteSnack = "chocolate bars";

// Store your current age
var currentAge = 25; // You can replace this with your actual age

// Store the maximum age
var maxAge = 80; // You can replace this with your estimated maximum age

// Store an estimated amount per day
var amountPerDay = 2; // You can replace this with your estimated amount per day

// Calculate how many snacks you would need for the rest of your life
var yearsRemaining = maxAge - currentAge;
var daysRemaining = yearsRemaining * 365;
var totalSnacksNeeded = daysRemaining * amountPerDay;

// Output the result to the screen
document.write("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");