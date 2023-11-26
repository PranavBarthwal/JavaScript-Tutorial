// ARRAYS

// Read from here : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array



// DECLARING AND ACCESSING ARRAY 

// const arr = [10, 20, 30, 40, 50, 60]
// const arr2 = ["shaktiman", "batman", "nagraj"]

//we can also use Array constructor function to create and array

// const arr3 = new Array(1, 2, 3, 45, 56)

// console.log(arr[4])
// console.log(arr2[1])
// console.log(arr3[4])




// ARRAY METHODS

// const array = [10,20,30,40,50,60]

//Push
// array.push(70)
// console.log(array)

//Pop
// array.pop()
// console.log(array)

//UNSHIFT : adds elements to starting of the array and shift the other values
// array.unshift(46)
// console.log(array)

//SHIFT : removes the first element
// array.shift()
// console.log(array)

//INCLUDES
// console.log(array.includes(9))                   // returns false

//INDEXOF
// console.log(array.indexOf(40))                   // returns 3

//JOIN : converts array into string
// const newArr2 = array.join()
// console.log(newArr2)                            // gives 10,20,30,40,50,60 instead of [ 10, 20, 30, 40, 50, 60 ]

//SLICE & SPLICE
 const myArr3 = [10,20,30,40,50,60]

 console.log(myArr3.slice(1,3))                   // gives [ 20, 30 ]  (does not include the upper index limit)
 console.log(myArr3)                              // gives [ 10, 20, 30, 40, 50, 60 ] (does not changes the original array)

 console.log(myArr3.splice(1,3))                  // gives [ 20, 30, 40 ]  (includes the upper index limit)
 console.log(myArr3)                              // gives [ 10, 50, 60 ]  (it deletes the elements from the array)