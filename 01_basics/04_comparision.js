// console.log("2" > 1);
// console.log("02" > 1); //khud hi convert krdiya string ko number m 


// console.log(0>0)
// console.log(0>=0);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);


/*the reason is that an equality check == and comparison >, <, >=, <= work differently.
comparison convert null to a number,  treating it as a 0. */

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// === strict check{also check datatypes}
console.log("2" === 2);