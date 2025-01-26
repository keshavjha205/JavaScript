// .reduce = reduce the element of an array to a single value

const myNumbers = [1, 2, 3,]

// const myTotal = myNumbers.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc+ currval
// }, 0)

const myTotal = myNumbers.reduce( (acc, currval) => acc+currval, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999,
        duration: "1 month"
    },
    {
        itemName: "java Course",
        price: 3999,
        duration: "3 months"
    },
    {
        itemName: "mobile dev Course",
        price: 5999,
        duration: "6 months"
    },
    {
        itemName: "data science Course",
        price: 15999,
        duration: "12 months"
    }
]

const totalPrice = shoppingCart.reduce( (acc, item ) => acc + item.price, 0)

console.log(totalPrice);
