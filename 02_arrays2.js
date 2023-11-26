// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)                      // we expected that both arrays will get merged but instead the whole array got pushed 
                                                  //in as an element, we get [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// so if we want to access flash then we can do it as follows
// console.log(marvel_heros[3][1])                   // we get flash                           


// CONCATENATION

// let concatHeros = marvel_heros.concat(dc_heros)
// console.log(concatHeros)                 // both arrays get erged and we get [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// SPREAD METHOD

// let allHeros = [...dc_heros, ...marvel_heros]
// console.log(allHeros)                      // gives [ 'superman', 'flash', 'batman', 'thor', 'Ironman', 'spiderman' ]




// FLAT() : used for flattening of nested array, takes the depth parameter and flattens the array till that depth

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const usableArray = another_array.flat(Infinity)
// console.log(usableArray)                     // gives [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]



// CONVERTING OTHER DATATYPES TO ARRAY

// console.log(Array.isArray("HItesh"))             // gives false as it is not an array

// console.log(Array.from("Hitesh"));               // gives [ 'H', 'i', 't', 'e', 's', 'h' ] (created an array from the string)


// console.log(Array.from({name: "hitesh"}))           // not able to convert an object in string, thus gives [].




// MAKING ARRAY FROM MULTIPLE VARIABLES

// let s1 = 100
// let s2 = 200
// let s3 = 300

// console.log(Array.of(s1, s2, s3))                   // gives [ 100, 200, 300 ]