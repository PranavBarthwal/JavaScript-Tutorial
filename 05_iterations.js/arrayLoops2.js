//for in loop

// iterating object using for in loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}


for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}




// iterating array using for in loop

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key)                    // gives 0 ro 4 numbers as ye array ki key return krdeta hai. yes, arrays mein bhi key hoti hai, key visible nhi hoti but 0 se start hoti hai and value se mapped hoti hai
}

//correct way of iterating in arrays

for (const key in programming) {
    //console.log(programming[key]);                         
}



// for in loop on map

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);                       // map is not iterable this way also
// }