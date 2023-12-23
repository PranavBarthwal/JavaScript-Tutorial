//****************Promise***********************
// The Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.



// creation of promise
const promiseOne = new Promise( function(resolve, reject){
    // do an async task
    // db calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete')
        resolve()                                       // resolve and .then connected
    }, 1000)

})

// consuming promise
promiseOne.then(function(){                               // .then is connected with resolve 
    console.log("promise consumed")
})                             

// we get following output :
// Async task is complete
// promise consumed




// another syntax : without storing promise in variable

new Promise( function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2 is complete')
        resolve()                                       // resolve and .then connected
    }, 1000)

}).then(function(){                               // .then is connected with resolve 
    console.log("promise 2 consumed")
})        

// we get the following output :
// Async task 2 is complete
// promise 2 consumed




//

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Chai", email:"chai@example.com"})           // we can get access of this obejct inside resolve by using .then 
    }, 1000)
})

promiseThree.then(function(user){                    // resolve wale object ko as user le lia yhaa
    console.log(user);                               // we get { username: 'Chai', email: 'chai@example.com' }
}) 