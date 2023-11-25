// STACK MEMORY 
// Primitive datatypes uses stack memory
// in stack memory we get the copy of the value of the variable declared
// eg -
        // let channelOne = "hiteshchoudharydotcom"
        // let channelTwo = channelOne
        // channelTwo = "chaiaurcode"

        // console.log(channelOne)    // we get hiteshchoudharydotcom
        // console.log(channelTwo)    // we get chaiaurcode

        // now first we declared a variable "channelOne" and gave it a value then we declared another variable "channelTwo" assigned "channelOne" value to it. now "channelTwo" mein uski original value nhi gyi blki "channelOne" ki copy bni and then value assign hui thats why jb humnein "channelTwo" ki value change kri to original value to change nhi hui lekin "channelTwo" ki copy wali vallue change hui jiski vjah se "channelTWo" ki value chage hogyi
        




// HEAP MEMORY
// Non primitive datatypes uses heap memory
// in heap memory we get the reference of the original value, so koi bhi change hoga vo original value mein hoga
// eg -
    //    let userOne = {
    //     email : "user@gmail.com",
    //     upi : "user@ybl"
    //    }

    //    let userTwo = userOne

    //    userTwo.email = "hitesh@gmail.com"

    //    console.log(userOne.email)     // we get hitesh@gmail.com
    //    console.log(userTwo.email)     // we get hitesh@gmail.com

       // here userTwo gets the reference to the original value therefore all the changes we made are reflected in the original object