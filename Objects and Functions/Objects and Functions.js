// Create a car object, add a color property to it with the value equals 'black'
let car = {color : 'black'};
console.log (car);


//Change the color property of the car object to 'green'
car.color = 'green';
console.log (car);


// Add the power property to the car object, which is a function and displays the engine power to the console
car.power = function (power) {
    return "Ungine power: " + power;
}
console.log (car.power(68));


//Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
function suFruitsOnWarehouse (pears,apples) {
    let sum = +pears + +apples;
        return sum;
}

console.log (suFruitsOnWarehouse (20, 35));


//Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)

    //Version 1 (with an array)
let paymentTerminalUsers = ["Maria","Alex","Bob","Alice",]; //There is a user database in the terminal

let user = "Bob"; // User enters a name

let getUserName = function (user) {                     //The name is checked against the database
        if (paymentTerminalUsers.includes(user)) {
            return userExist();
        } else {return userUnknown()};
}
    let userExist = () => "Hello, " + user;
    let userUnknown = () => "There is no such name";
   
   console.log (getUserName (user));                    //user exists in database
   console.log (getUserName ("Ann"));                   //user does not exist in the database

   //Version 2 (for browser, accepts user data)
let name = prompt("Enter your name", "");
	alert (userName(name));
	
	function userName (name) { 
    if (name) {
        return "Hello, " + name;
    } else {
        return "There is no such name";
    };
};

     //Version 2 - Terminal.js


 //Write a function for calculating the type of argument and type output to the console
let arg1 = 5;
let arg2 = "123";
let arg3 = true;
let arg4 = {name : "Test"};

    function typeOfArgument (arg) {
        return typeof(arg);
    }
console.log(typeOfArgument (arg1)),
console.log(typeOfArgument (arg2)),
console.log(typeOfArgument (arg3)),
console.log(typeOfArgument (arg4))


// Write a function that determines whether a number is prime or not
function IsPrime(p) {
    if (p <= 1) {
        return "Number must be greater than 1";
    } else if (p === 2) {
        return `${p} is Prime number`
    }
    
let x = 2; 
const limit = Math.sqrt(p);
    while (p >= 1 && x <= limit) {
        if (p % x === 0) {
            return `${p} is Composite number`;
        };
    x += 1;
    }
        return `${p} is Prime number`;
}

console.log(IsPrime (0));
console.log(IsPrime (2));
console.log(IsPrime (3));
console.log(IsPrime (5));
console.log(IsPrime (8));
console.log(IsPrime (9));
console.log(IsPrime (11));
console.log(IsPrime (13));
console.log(IsPrime (15));
console.log(IsPrime (19));
console.log(IsPrime (25));
console.log(IsPrime (37));
console.log(IsPrime (61));
console.log(IsPrime (100));
console.log(IsPrime (103));