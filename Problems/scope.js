//Implement a function that remembers a counter value
//write a function createCounter that returns a function each time. Each time this function is called,it should increase and returns the counter value.

function createCounter() {
    let count = 0;

    return function increaseCount(){
        count = count +1 ;
       console.log(count);
       
    }
}

let counter = createCounter()

counter()
counter()
counter()
counter()