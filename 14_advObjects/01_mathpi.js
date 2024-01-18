// In JS Math.PI has value 3.14..... but can we change it to 3 or 4 or any other?

// we cant overwrite its value dono cases mein we get 3.14....
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);



const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// the above method gives us the properties associated with the parameter that we pass
// in above line humne Math module mein se "PI" key ki description nikali h.

console.log(descripter);  

// gives the below output
// {
//     value: 3.141592653589793,
//     writable: false,                         // and now as Math module mein "PI" key ki "writable" property false ho rkhi hai to hum PI ki value change nhi kr skte. agar ise true bhi krde to JS engine mein aur bhi measures hai that will make sure ki ye overwrite na ho paaye.
//     enumerable: false,
//     configurable: false                                                 
//   }





// Can we hardcode values in our own objects

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
//gives below output
// {
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }

// we can manipulate/define the property like this
Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,            // ise false krdia fir vo object iteratable nhi hoga by any loop and "name" property bhi print nhi hogi
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}