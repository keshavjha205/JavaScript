// const score = 400
// console.log(score);

// const balance = new Number(1000)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(typeof balance);
// console.log(balance.toFixed(2));

// const otherNumber = 123.456

// console.log(otherNumber.toPrecision(4));

// const bigNum = 10000000
// console.log(bigNum.toLocaleString('en-IN')); // use to give comma and 'en-In' defines Indian system

//+++++++++++++++++  Maths  ++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.4));
// console.log(Math.round(4.7));

// console.log(Math.ceil(4.1)); // takes the upper value even if it's a bit bigger

// console.log(Math.floor(4.9)); // takes the lower value even if it's a bit smaller

// console.log(Math.min(24, 39, 79, 52));
// console.log(Math.max(24, 39, 79, 52));

// console.log(Math.random()); // {always returns b/w 0-1}
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 11
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
