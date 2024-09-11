//CHAP 5
//QUESTION 1
var num1 = 3;
var num2 = 5;
document.write(`Sum of ${num1} and ${num2} is ${num1+num2}`);

//QUESTION 2
document.write(`<br>Difference of ${num1} and ${num2} is ${num1-num2}`);
document.write(`<br>Product of ${num1} and ${num2} is ${num1*num2}`);
document.write(`<br>Division of ${num1} and ${num2} is ${num1/num2}`);
document.write(`<br>Modulus of ${num1} and ${num2} is ${num1%num2}`);

//QUESTION 3
var number;
document.write(`<br><br>Value after variable declaration is ${typeof number}`);
number = 5;
document.write(`<br>Initial Value: ${number}`);
document.write(`<br>Value after increament ${++number}`);
document.write(`<br>Value after addition ${a=number+7}`);
document.write(`<br>Value after decreament ${--a}`);
document.write(`<br>The Remainder is: ${a%3}`);

//QUESTION 4
var ticketPrice = 600;
document.write(`<br><br>Total Cost to buy 5 movie tickets is Rs.${ticketPrice*5}`);

//QUESTION 5
var table = 4;
document.write(`<br><br>Table of ${table}`);
for (let index = 1; index < 11; index++) {
    document.write(`<br>${table}x${index}=${table*index}`);
}

//QUESTION 6 
var celsius = 25,fahrenhiet=70;
document.write(`<br><br>${celsius}<sup>0</sup>C is ${(celsius*9/5)+32}<sup>0</sup>F`);
document.write(`<br>${fahrenhiet}<sup>0</sup>F is ${(fahrenhiet-32)*5/9}<sup>0</sup>C`);

//QUESTION 7
var price1 = 650;
var quantity1 = 3;
var price2 = 100;
var quantity2 = 7;
var ship_chrges = 100;
document.write('<br><br><h1>Shopping Cart</h1>');
document.write(`<br>Price of item 1 is ${price1}`);
document.write(`<br>Quantity of item 1 is ${quantity1}`);
document.write(`<br>Price of item 2 is ${price2}`);
document.write(`<br>Quantity of item 2 is ${quantity2}`);
document.write(`<br>Shipping Charges is ${ship_chrges}`);
document.write(`<br>Total Cost = ${(price1*quantity1)+(price2*quantity2)+ship_chrges}`);

//QUESTION 8
var total_marks=980;
var marks_obtained=804;
var pencent = (marks_obtained/total_marks)*100;
document.write('<br><br><h1>Marksheet</h1>');
document.write(`<br>Total marks: ${total_marks}`);
document.write(`<br>Obtained marks: ${marks_obtained}`);
document.write(`<br>Percentage: ${pencent}%`);

//QUESTION 9
var pkr = (10*104.80)+(25*28);
document.write('<br><br><h1>Currency in PKR</h1>');
document.write(`<br>Total Currency in PKR: ${pkr}`);

//QUESTION 10
var i = 10;
var calc = (((i+5)*10)/2);
document.write(`<br><br>Question 10 result= ${calc}`);

//QUESTION 11
var current_year = 2024;
var birth_year = 1992;
document.write('<br><br><h1>Age Calculator</h1>');
document.write(`<br>Current year: ${current_year}`);
document.write(`<br>Your birth year: ${birth_year}`);
document.write(`<br>Your age is: ${current_year-birth_year}`);

//QUESTION 12
var radius = 20;
document.write('<br><br><h1>The Geometrizer</h1>');
document.write(`<br>Radius of the circle: ${radius}cm`);
document.write(`<br>Circumference of the circle: ${radius*2*3.142}cm`);
document.write(`<br>Area of the circle: ${3.142*(radius**2)}cm<sup>2</sup>`);

//QUESTION 13
var favoriteSnack = "Chocolate";
var currentAge = 30;
var maxAge = 80;
var amountPerDay = 2;
var daysRemaining = (maxAge - currentAge) * 365;
var totalAmount = daysRemaining * amountPerDay;
document.write(`<br><br>You will need ${totalAmount} of ${favoriteSnack} to last you until the ripe old age of ${maxAge}.`);









