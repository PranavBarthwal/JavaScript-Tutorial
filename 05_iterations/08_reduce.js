/*
 Map, Filter, and Reduce are Array methods which help to create new arrays in various ways. They are all 'higher order' functions because they take user-defined functions as parameters.

Map: returns an array of pieces of information from the original array. In the callback function, return the data you wish to be part of the new array.

Filter: returns a subset of the original array based on custom criteria. In your callback function, return a boolean value to determine whether or not each item will be included in the new array.

Reduce: can be used to return almost anything. It is often used to return a single number, like an sum, but it can also be used to combine the logic of Map and Filter to return an array of values matching certain criteria. This can remove unnecessary iterations.

The callback for Reduce has two parameters: the accumulator and the current value. Make sure you always return the accumulator after modifying it! In addition to the callback, Reduce receives a second parameter that will define the initial value of the accumulator
*/



// ****************************************************************************************


// REDUCE
//The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.  The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).


//printing sum of array using reduce

const myNums = [1,2,3]

// const myTotal = myNums.reduce( function(accumulator, current) {
//     console.log(`accumulator : ${accumulator} and Current : ${current}`);
//     return accumulator +  current
// },0)


// writing same thing using arow function
const myTotal = myNums.reduce((acc, curr) => (acc+curr),0 )

console.log(myTotal)






// real life us ecase of reduce in shopping cart


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const totalPrice = shoppingCart.reduce((acc, item) => (acc + item.price),0)
console.log(totalPrice)