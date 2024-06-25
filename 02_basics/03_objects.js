// Singleton => apni trh ka ek hi object hai 
// & jab bhi literals ki tarah declare karenge toh SIngleton nahi banta; constructor se banega toh singleton hoga

// Object literals

//in case of symbol if you want to declare a symbol in a object you can not do it directly first you have a declare it outside the object
const mySym = Symbol("key1")


const JsUser ={
    name: "Keshav",
    "full name": "Keshav Jha",
    // mySym: "mykey1",// string ki trh use ho rha hai symbol ki trh nahi
    [mySym]: "mykey1",
    age: 21,
    location: "Delhi",
    email: "keshav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wenesday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser ["full name"]);
// console.log(JsUser [mySym]);
// console.log(typeof mySym);


JsUser.email = "keshav@chatgpt.com"
// Object.freeze(JsUser) // freezes the object so that no one can overwrite it
JsUser.email = "keshav@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
// console.log(JsUser.greeting); // inthis case function is not executed but we gets it's reference
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name} `);
}
console.log(JsUser.greetingTwo());
