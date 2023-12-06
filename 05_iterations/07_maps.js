// MAPS

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map((item) => (item+10))
// console.log(newNums)             // gives [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]




// chaining of maps & filters

let arr = [1,2,3,4,5,6,7,8,9,10]

const newArr = arr
                .map((item) => item*10)
                .map((item) => item+1)
                .filter((item) => item >= 40)

console.log(newArr)                //we get [ 41, 51,  61, 71, 81, 91, 101 ]

 




//************************************************************************************************** 


/*
 Map, Filter, and Reduce are Array methods which help to create new arrays in various ways. They are all 'higher order' functions because they take user-defined functions as parameters.

Map: returns an array of pieces of information from the original array. In the callback function, return the data you wish to be part of the new array.

Filter: returns a subset of the original array based on custom criteria. In your callback function, return a boolean value to determine whether or not each item will be included in the new array.

Reduce: can be used to return almost anything. It is often used to return a single number, like an sum, but it can also be used to combine the logic of Map and Filter to return an array of values matching certain criteria. This can remove unnecessary iterations.

The callback for Reduce has two parameters: the accumulator and the current value. Make sure you always return the accumulator after modifying it! In addition to the callback, Reduce receives a second parameter that will define the initial value of the accumulator
*/