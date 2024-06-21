const name = "keshav"
const repoCount = 5

// console.log(name + repoCount + " value"); // don't use this

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('twilight-Shadow-spectre')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('d'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-5, 4)
// console.log(anotherString);

// const newStringOne = "   Shadow  "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://codejourney/code%20journey"
console.log(url.replace('%20', '-'));

console.log(url.includes('journey')); 
console.log(url.includes('programmer')); 

console.log(gameName.split('-')); // converts into array