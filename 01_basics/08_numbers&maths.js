
// *********************************NUMBERS IN JS*********************************

// Declaration of number
// const score = 400
// console.log(score)   // gives 400


// EXPLICIT DECLARATION OF NUMBER
// const balance = new Number(100)
// console.log(balance)    // gives [Number: 100]


// we can use some methods of this explicitly declared number

// toString method
// console.log(balance.toString()) // gives 100 (converted to string)
// console.log(typeof balance.toString())  // gives string

// toFixed method : used to fix the precision value
// console.log(balance.toFixed(2))   // gives 100.00

// toPrecision method
// const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(3))   // gives 23.9 (precision given to first three values)
// console.log(otherNumber.toPrecision(2))   // gives 24   (precision given to only first two values)

// toLocaleString method
// const hundreds = 100000000
// console.log(hundreds.toLocaleString());  // gives 100,000,000 (acc to US standards)
// console.log(hundreds.toLocaleString('en-IN'));  // gives 10,00,00,000 (acc to indian standards)







// *****************************MATHS IN JS********************************


// console.log(Math)

// now this math object also has many methods

// abs method : gives absolute value
// console.log(Math.abs(-4))  // gives 4

// round method : gives rounded off value
// console.log(Math.round(8.3))   // gives 8

// ceil and floor method : gives celing & floor value repsectively
// console.log(Math.ceil(8.3))    // gives 9
// console.log(Math.floor(8.9))   // gives 8

// max and min method
// console.log(Math.min(2,4,5,6,7,8,9));   // gives 2
// console.log(Math.max(2,4,5,6,7,8,9));   // gives 9

// random method : gives a random value between 0 and 0.999999999.....