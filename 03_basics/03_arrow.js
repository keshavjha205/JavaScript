const user = {
    userName : "keshav",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()

// console.log(this); // ye empty object ko refer kar rha hai kyuki global context empty hai pr browser ka global object window hai toh wha usko hi refer krega

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()  // 'this' bas object ke andar h excute hoga functions me nahi


// arrow function me bhi work nahi krega
const chai = () => {
    let username = "hitesh"
     console.log(this.username);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 5));


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "keshav"})

console.log(addTwo(3, 5));
