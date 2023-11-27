let a = 300

if(1<2){
    let a =10
    const b = 20
    var c = 23

    console.log("inner a : ", a)
}

//console.log("outer a : ", a)               // ye global scope wale a ki value deta hai
//console.log(b)                             // ye error throw krta hai as b ka scope sirf if condition mein tha
console.log(c)                               // ye print hojata hia 23, even tough ye if ke andar declare kra tha, which is problematic
