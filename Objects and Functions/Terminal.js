// Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)

// Version3

{"use strict";
let paymentTerminalUsers = ["Maria","Alex","Bob","Alice",];     //There is a user database in the terminal

const prompt  = require("prompt-sync")({sigint: true});
let getUser = prompt("Enter your name: ","");
paymentTerminalUsers.push(getUser)                              //The username is stored in terminal

console.log("Your name was registered");
//console.log(paymentTerminalUsers)

let user = prompt("Enter your name: ","");                      //checking the username for presence in the database

let getUserName = function (user) { 
        if (paymentTerminalUsers.includes(user)) {
            return userExist();
        } else {return userUnknown()};
}
    let userExist = () => "Hello, " + user;
    let userUnknown = () => "There is no such name";
   
   console.log (getUserName (user));
}