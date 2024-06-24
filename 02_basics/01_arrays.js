//array

const myArr = [0, 1, 2, 3, 4, 5] 
// console.log(myArr[2]);

// const newArr = new Array(0, 1, 2, 3, 4)
// console.log(newArr[2]);
// console.log(`The length of the array is ${newArr.length}`);

//Array methods

myArr.push(6) // add given element at last index
// console.log(myArr);
myArr.pop() // removes last index's element
// console.log(myArr);
myArr.unshift(8) // gives index-0 to assign element in paranthesis
// console.log(myArr);
myArr.shift() // removes first element
// console.log(myArr);

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(5));

let tar = 3
// console.log(myArr.includes(tar));

// const arr = myArr.join()

// console.log(myArr);
// console.log(arr);
// console.log(typeof arr);

// Slice /Splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C", myArr );

// splice orignal array ko hi change kar deta hai 