// var c = 300
let a = 100

if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c); // var ki value aayegi hi aayegi isliye prefer not to use

function one(){
    const userName = "keshav"

    function two(){
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);

    // two()
}

one()

if (true) {
    const userName = "keshav"
    if (userName == "keshav") {
        const website =" metube"
        // console.log(userName + website);
    }
    // console.log(website); // outside of scope that's why gives error
}
// console.log(userName);


//++++++++++++++++++ Intresting +++++++++++++++++++++++

// console.log(addone(5)) 
function addone(num){
    return num +1
}
// console.log(addone(5)) // dono tarike se work karega



// function declare karne ka alag tarega(expression bhi kehte hai)

// console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}
// console.log(addTwo(5)); // ese me work nahi karega