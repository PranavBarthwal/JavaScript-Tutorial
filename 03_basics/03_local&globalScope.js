// let a = 300

// if(1<2){
//     let a =10
//     const b = 20
//     var c = 23

//     console.log("inner a : ", a)
// }

//console.log("outer a : ", a)               // ye global scope wale a ki value deta hai
//console.log(b)                             // ye error throw krta hai as b ka scope sirf if condition mein tha
//console.log(c)                               // ye print hojata hia 23, even tough ye if ke andar declare kra tha,   which is problematic


// hum global scope mein declared value ko lisi local scope mein use kr skte hai lekin kisi variable with local scope ko hum globally access nhi kr skte




//**********************************************************NESTED SCOPE**********************************************************

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
     //console.log(website);             // this gives error as website ka scope sirf function two() mein hi hai

     two()                               // gives Hitesh

}

 one()                // gives Hitesh, calls function one() which then executes function two and then calls function two which console.logs username







 // ****************************************Mini Hoisting************************************

 console.log(addone(5))             // this does not give error even tough function is declared later on 

function addone(num){
    return num + 1
}



addTwo(5)                             // this does give error 

const addTwo = function(num){                  // fucntion decalred and its value is held in a const
    return num + 2
}
