let score = "33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)    // using Number(), emphaisis on capital N, we can make sure that the string no is converted into a number 
console.log(typeof valueInNumber)    // we get number
console.log(valueInNumber)           // we get 33





let score2 = "33abc"

let valueInNumber2 = Number(score2)    // using Number(), emphaisis on capital N, we can make sure that the string no is converted into a number 
console.log(typeof valueInNumber2)    // we get number
console.log(valueInNumber2)           // we get NaN






let score3 = null

let valueInNumber3 = Number(score3) 
console.log(typeof valueInNumber3)         // we get number
console.log(valueInNumber3)                // we get 0 (null is coverted into 0 by using Number())





let score5 = undefined

let valueInNumber5 = Number(score5) 
console.log(typeof valueInNumber5)         // we get number
console.log(valueInNumber5)                // we get Nan





let score6 = true

let valueInNumber6 = Number(score6) 
console.log(typeof valueInNumber6)         // we get number
console.log(valueInNumber6)                // we get 1 (treu gets converted to 1 by usinf Number())




