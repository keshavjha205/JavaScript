"use strict"; //treat all JS code as newer version

// alert(3 + 3) // gives errer; cuz we are using nodejs, not browser

// console.log(3 + 3);


/* Primitive datatype(Call by value) */
// 7 types: String, Number, Boolean, null, undefined, Symbol(used invalue ko unique banane), BigInt

// number => 2 to the power 53
// let age = 20 

// bigint => for big numbers
// let bignumber = 123456789134323543134313410n

// String => always prefer in ""
// let name = "keshav"

// Boolean => true/false
// let isLoggedIn = true

// null => standalone value
// let outsideTemp = null 

// undefined =>
// let userEmail;
// let userEmail2 = undefined

// symbol => unique
// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

/* Reference (Non Primitive) */

// Array, Objects, Functions

const heros =["shaktiman", "naagraj", "doga"]

     // object
let myObj = {
    name: "keshav",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}


console.log(typeof myObj); //to check the type of any datatype

// reference variable returns in object like objectfunction 


/* ********************************************** */

// Stack (Primitive), Heap (Non-Primitive)
// stack me copy milti hai( jo bhi variable declare kiya hai uska) & in heap hume reference milta hai orignal value ka (so changes happens in orignal value)...

let myYoutubename = "code_journey"

let anotherName = myYoutubename
anotherName = "programmeronduty"

console.log(myYoutubename);
console.log(anotherName);

let userOne ={
    email: "keshav@gmail.com",
    upi: "keshav@ybl"
}

let userTwo = userOne

userTwo.email = "kjha@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);