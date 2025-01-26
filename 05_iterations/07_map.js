// .map() = accepts a callback and that function to each element of           an array, then return a new array

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) =>{return num*4})

const newNums = myNumbers
                .map( (num) => num*10)
                .map( (num) => num + 1)
                .filter((num) => num%3==0)

console.log(newNums);
