// explicit conversion - number
let number = "123";
console.log(+number);
console.log(typeof(+number));

let number1 = Number("123");
console.log(number1);

let number2 = Number("Test");
console.log(number2);

let number02 = "Test";
console.log(+number02);
console.log(typeof(+number02));

let number3 = Number(true);
console.log(number3);

let number4 = Number(false);
console.log(number4);

let number5 = Number(null);
console.log(number5);

// explicit conversion - string
let str1 = String("123");
console.log(typeof(str1));

let str2= String(true);
console.log(typeof(str2));

let str3 = String(false);
console.log(typeof(str3));

let str4 = String(null);
console.log(typeof(str4));

// explicit conversion - boolean

let bool = 3;
console.log(!!bool); 

let bool1 = Boolean(3);
console.log(bool1); 

let bool2 = Boolean(-3);
console.log(bool2); 

let bool3 = Boolean(1); 
console.log(bool3); 

let bool4 = Boolean(0);
console.log(bool4); 

let bool5 = Boolean(" ");
console.log(bool5); 

let bool6 = Boolean("");
console.log(bool6); 

let bool7 = Boolean(NaN); 
console.log(bool7); 

let bool8 = Boolean("0"); 
console.log(bool8); 