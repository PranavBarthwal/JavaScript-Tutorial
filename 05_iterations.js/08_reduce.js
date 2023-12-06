/*
 Map, Filter, and Reduce are Array methods which help to create new arrays in various ways. They are all 'higher order' functions because they take user-defined functions as parameters.

Map: returns an array of pieces of information from the original array. In the callback function, return the data you wish to be part of the new array.

Filter: returns a subset of the original array based on custom criteria. In your callback function, return a boolean value to determine whether or not each item will be included in the new array.

Reduce: can be used to return almost anything. It is often used to return a single number, like an sum, but it can also be used to combine the logic of Map and Filter to return an array of values matching certain criteria. This can remove unnecessary iterations.

The callback for Reduce has two parameters: the accumulator and the current value. Make sure you always return the accumulator after modifying it! In addition to the callback, Reduce receives a second parameter that will define the initial value of the accumulator
*/



// ****************************************************************************************
