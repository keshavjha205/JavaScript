function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
addTwoNumbers(3,5)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username}, just logged in`
}
// console.log(loginUserMessage("Keshav"))
// console.log(loginUserMessage()) 

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(250, 300, 400));

const user ={
    userName : "prashant",
    price: 49
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
} 

// handleObject(user)
handleObject({
    userName: "rawat",
    price : 99
})

const myArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([400, 600, 800]));