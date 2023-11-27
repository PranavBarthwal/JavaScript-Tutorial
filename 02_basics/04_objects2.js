// const tinderUser = {}
// tinderUser.id ="123abc"
// tinderUser.name = "sam"
// tinderUser.isLoggedIn = false

// console.log(tinderUser)


//we can get all the keys of the object
// console.log(Object.keys(tinderUser))            // returns us an array of all the keys in the object tinderUser, we get [ 'id', 'name', 'isLoggedIn' ]

// ||ly we can get all the values of the object
// console.log(Object.values(tinderUser))          // returns us an array of all the values in the object tinderUser, we get [ '123abc', 'sam', false ]


// we can get all the entries in the object as an array
// console.log(Object.entries(tinderUser))          // we get [ [ 'id', '123abc' ], [ 'name', 'sam' ], [ 'isLoggedIn', false ] ]

//now before using any property in an object we can checck whether it has that property or not
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))           //gives true
// console.log(tinderUser.hasOwnProperty('isLogged'))             //gives false






// NESTED OBJECTS

// const regularUser = {
//     email : "pranav@gmail.com",
//     fullname : {
//         username : {
//             firstname : "Hitesh",
//             lastname : "Choudhary"
//         }
//     }
// }

// console.log(regularUser.fullname.username.lastname)                   // we get choudhary




// MERGING OBJECTS

// const obj1 = {
//     1:"a",
//     2:"b"
// }
// const obj2 = {
//     3:"c",
//     4:"d"
// }


// const obj3 ={obj1, obj2}
// console.log(obj3)                           // merge krne ki jgah ye object ke andar object create krdeta hai


// Object.assign() method for merging objects
// const obj4 = Object.assign(obj1, obj2)
// console.log(obj4)                               // successfully merges, we get { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// Spread method for merging objects
// const obj5 = {...obj1, ...obj2}
// console.log(obj5)                               // successfully merges, we get { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }






// WE GET DATA FROM DATABASE AS AN ARRAY OF OBJECTS 

// const users =[
//     {
//         name:"hitseh",
//         age:19
//     },

//     {
//         name:"mokshit",
//         age:20
//     },

//     {
//         name:"arpan",
//         age:29
//     }
// ]

// console.log(users[1].name)                  // we get mokshit





//*************************************************************OBJECTS DESTRUCTURING********************************************************

//object destructuring is purely used as a syntactic sugar. Our dot notation method also works fine but to make the code more readble we us object destructuring


const course = {
    coursename:"js in hindi",
    price:999,
    courseInstructor:"hitesh"
}

//console.log(course.courseInstructor)                   // works fine but very long

// destructuring
const {courseInstructor : instr} = course                // now instead of using course.courseInstructor , we can simply use instr
console.log(instr)