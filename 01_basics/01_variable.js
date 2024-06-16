const accountId = 144553  //we use const when we don't want to change the values later onn.
let accountEmail = "random@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;


// accountId = 2 //not allowed

accountEmail = "keshav@gmail.com"
accountPassword = "54321"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var;
because of issue in block scope and functional scope...
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])