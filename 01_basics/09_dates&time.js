// DATES IN JAVASCRIPT

// MDN DOCS FOR FUTURE REFERENCE 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


//CREATING NEW DATE OBJECT USING DATE CONSTRUCTOR FUNCTION

// let  myDate = new Date()

//DIFFERENT FORMATS 

// console.log(myDate);                             //not readable , gives 2023-11-26T07:00:58.157Z

// console.log(myDate.toString())                   //readable, gives Sun Nov 26 2023 07:00:58 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString())               // readable, gives Sun Nov 26 2023

// console.log(myDate.toISOString())                // not readable, gives 2023-11-26T07:00:58.157Z

// console.log(myDate.toJSON())                     // not readable, gives 2023-11-26T07:00:58.157Z

// console.log(myDate.toLocaleString())             // readable, gives 11/26/2023, 7:04:22 AM

// console.log(myDate.toLocaleDateString())         // readable, gives 11/26/2023


// TYPE OF DATE
// console.log(typeof myDate)                       // Date is an object which was created using date constructor fucntion



// CREATING A SPECIFIC DATE

// let myBday = new Date(2023, 0, 23, 5, 8)                  
// console.log(myBday.toDateString())                  // gives Mon Jan 23 2023 (month starts from 0)
// console.log(myBday.toLocaleString())                // gives 1/23/2023, 5:08:00 AM

//in specific formats like yyyy-mm-dd
// let myAnni = new Date("2023-11-15")
// console.log(myAnni.toDateString())                  // gives Wed Nov 15 2023
 



// CREATING TIMESTAMPS IN JS

let myGymDate = new Date("2023-11-09")
let myTimeStamp = Date.now()

console.log(myTimeStamp)                               // gives 1700991708482 (it is miliseconds from 1 january 1970 till now)

console.log(myGymDate.getTime())                       // gives 1699488000000 (is date tk ke milisecconds)

// Convert these miliseconds into seconds
console.log(Math.floor(Date.now()/1000))               // gives 1700992210




// METHODS IN DATE OBJECT
 
let newDate = new Date()

console.log(newDate.getDay())
console.log(newDate.getMonth())
console.log(newDate.getMinutes())



// Make customised formats using toLocaleString() method

newDate.toLocaleString('dafault' {
    weekday : "long",
})