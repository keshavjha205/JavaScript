const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        // console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    // console.log("Promise Consumed");   
})
// resolve ka sidha connection .then k saath hota hai

new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log("Async task 2");
        resolve()
    },1000)

}).then(function(){
    // console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: "codeJourney", email: "codejourney35@gmail.com"}) // generally object aata hai pr hum aur datatype bhi rakh skte hai
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
}) // jo bhi parameter resolve me daloge woh .then me execute hoga.

