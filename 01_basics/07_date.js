// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

//let myCreatedDate =  new Date(2023, 0, 12)  //month zero se start hongye
//console.log(myCreatedDate.toDateString());

// let myCreatedDate =  new Date(2023, 0, 12, 22, 3, 12) 
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate =  new Date("2023-01-14") 
// console.log(myCreatedDate.toDateString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday: "long"
})
