// lets suppose we want to create a shopping cart for which we create a function in which we want to pass many prices that w can add later. we can do this by using rest operator (...) in the parameter

// function calculateCartPrice(...num){
//     return num
// }

// console.log(calculateCartPrice(200,23124,346,8980,456,789,565))               // gives [200, 23124, 346, 8980, 456, 789, 565] , now we can loop this to find sum



// what if we use both normal parameter and a parameter with rest operator
// function calculateCartPrice2(val1, val2, val3, ...num){
//     return num
// }

// console.log(calculateCartPrice2(200,23124,346,8980,456,789,565))                  // gives [ 8980, 456, 789, 565 ], as it stored first 3 values in val1, val2, val3 resp and all the other values in ...num and when we returnes num we got those values in array 





// FUNCTIONS WITH OBJECTS

const user ={
    username: "hitesh",
    price:199
}

function handleObject(object) {
    console.log(`username is ${object.username} and price is ${object.price} `)
}

// we can pass a predefined object
handleObject(user)                           // gives username is hitesh and price is 199 

// we can directly pass an object as an argument
handleObject({
    username :"akshay12",
    price:899
})






// FUNCTION WITH ARRAYS

const arr = [200, 400, 600, 800, 1000]

function handleArray(array) {
    return array[2]
}

//we can pass a predefined array
console.log(handleArray(arr))      // gives 600

// we can directly pass an array
console.log(handleArray([200, 400, 600, 800, 1000])) 
