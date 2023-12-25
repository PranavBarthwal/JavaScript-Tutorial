//****************Promise***********************
// The Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// "Producing code" is code that can take some time

// "Consuming code" is code that must wait for the result

// A Promise is an Object that links Producing code and Consuming code



// creation of promise
// const promiseOne = new Promise( function(resolve, reject){
//     // do an async task
//     // db calls, cryptography, network

//     setTimeout(function(){
//         console.log('Async task is complete')
//         resolve()                                       // resolve and .then connected
//     }, 1000)

// })

// consuming promise
// promiseOne.then(function(){                               // .then is connected with resolve 
//     console.log("promise consumed")
// })                             

// we get following output :
// Async task is complete
// promise consumed




// another syntax : without storing promise in variable

// new Promise( function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task 2 is complete')
//         resolve()                                       // resolve and .then connected
//     }, 1000)

// }).then(function(){                               // .then is connected with resolve 
//     console.log("promise 2 consumed")
// })        

// we get the following output :
// Async task 2 is complete
// promise 2 consumed




// passing data in resolve() and accessing it while consuming the promise using .then

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username:"Chai", email:"chai@example.com"})           // we can pass data as parameter in this resolve(). we can get access of this obejct inside resolve by using .then 
//     }, 1000)
// })

// promiseThree.then(function(user){                    // resolve wale object ko as user le lia yhaa
//     console.log(user);                               // we get { username: 'Chai', email: 'chai@example.com' }
// }) 







 
// reject, .then() chaining, .catch() & .finally

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true

//         if (!error){
//             resolve({username: "Hitesh", password: "123"})
//         }else{
//             reject('error : something went wrong')
//         }

//     }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username              // ab hum yha directly usename access ni kr skte, iske liye .then() chaining use krnui padegi

// }).then((username) => {               // jo upar wale .then ne returnkra hoga vo hum yha access kr skte h
//     console.log(username);            // if error = false, we get the username

// }).catch(function(error){
//     console.log(error);               // if error = true, we get error : something went wrong

// }).finally(() => console.log("the promise is either resolved or rejected"))






// async await : handling promises through async await

// The keyword async before a function makes the function return a promise
// The await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false

//         if (!error){
//             resolve({username: "Hitesh", password: "123"})
//         }else{
//             reject('error : something went wrong')
//         }

//     }, 1000)
// })

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response)
// }

// consumePromiseFive()
// ye jb error false hoga tb to sahi work krega but jb error true hoga to ye error dega as humne try catch block use nhi kra and isko lgega ki humesha value ayegi hi ayegi but this is not case, jb error true hoga to value nhi aayegi





// try catch blcok in async await

// const promiseSix = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true

//         if (!error){
//             resolve({username: "Hitesh", password: "123"})
//         }else{
//             reject('error : something went wrong')
//         }

//     }, 1000)
// })

// async function consumePromiseSix(){
    
//     try {
//         const response = await promiseSix
//         console.log(response)
//     } catch (error) {                           // error handled gracefully
//         console.log(error)
//     }
    
// }

// consumePromiseSix()







// using fetch() with async await

// async function getAllUsers(){

//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')           // we can also pass other parameters like option in fetch() like we did in DALL-E Project
//         const data = await response.json()
//         console.log(data)
//     } catch(error){
//         console.log("E : ", error)
//     }
// }


// getAllUsers()




// using getch with .then chaining (also called thenables)

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))



















