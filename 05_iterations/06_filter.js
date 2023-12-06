// FILTER

// using filter to return values

// const nums = [1,2,3,4,5,6,7,8,9,10]

//syntax of filter (takes in a callback function)
// const bigNums = nums.filter( (item) => (item >4) )       // yha pe arrow function implicitly return krdega all nums greater than 4

// console.log(bigNums)             // we get [ 5, 6, 7, 8, 9, 10 ]






// using for each to perform ame thing

// const nums2 = [1,2,3,4,5,6,7,8,9,10]
// const newNums = []

// nums2.forEach((item) => {
//     if(item > 4){
//         newNums.push(item)
//     }
    
// });

// console.log(newNums)              // we get [ 5, 6, 7, 8, 9, 10 ]











const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let userBooks = books.filter((bk) => (bk.genre === 'History'))         //yha humne arrow fxn mein parenthesis use kre to return likhne ki zrurat nhi hai.
  console.log(userBooks)              // we get the objects having genre as history

  userBooks = books.filter((bk)=> {return bk.publish >= 2000})           // yha humne arrow fxn mein curly bracket use kra hai to return krwana pdega
  console.log(userBooks)             // we get the objects having publish >= 2000