// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Kathy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email : "some@gmail.com",
    fullname: {
        userfullname: {
            firstname : "keshav",
            lastname : "jha"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "c", 4: "d"}
const obj3 ={5: "e", 6: "f"}

// const obj4 = {obj1, obj2} //not doing it properly
// const obj4 = Object.assign({}, obj1, obj2, obj3) // can do in this way

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // keys ka ek array bana diya
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // isne key-value pair ka array bana diya

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

