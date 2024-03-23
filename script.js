



// qa 1

//   Eliminate duplicates in an Array.
// a) Suppose you have an Array [3,4,9,3,8,0,4,9].
// b) Write a function which will receive an array as param , that will remove all
// duplicates and return an array with unique items.
// c) Here, the output should be [3,4,9,8,0].

// ans 1)  

// let arrya=[3,4,9,3,8,0,4,9]


// function duplicate(arr){

//    let res=[...new Set(arr)]  

//    return res

// }

// console.log(duplicate(arrya))



// qa-2

// Find the largest and smallest number in an unsorted integer array
// a) Suppose you have an Array [3,4,9,3,8,0,4,9].
// b) Write a function which will receive an array as param , that will return the highest and
// smallest number as an array.
// c) Here, the output should be [9, 0].


// ans-2

// let arrya = [3, 4, 9, 3, 8, 0, 4, 9]


// let res = []

// function highest(arr) {

//     let val = 0

//     for (let x of arr) {

//         if (val < x) {

//             val = x
//         }
//     }

//     return val
// }



// function small(arr) {

//     let val = 0

//     for (let x of arr) {

//         if (val > x) {

//             val = x
//         }
//     }

//     return val


// }


// res.push(highest(arrya))

// res.push(small(arrya))

// console.log(res)




// qa-3 

// A given string be reversed using recursion
// a) Suppose you have a string “KRIYATMA”
// b) Write a function that will receive a string as param, that will reverse the string and
// return it.


// ans-3


//  let str="KRIYATMA"

//  function revers(strs) {

//      let arr=str.split('')

//     let final=arr.reverse().join('')

//    return final

  
//     }

//     console.log(revers(str))



// qa-4


// Write a function that finds the longest word in a sentence.

// a) Suppose you have a string ‘The quick brown fox jumps over the lazy
// dog’.
// b) Write a function that will return the longest word .

 

// ans-4

// let str= 'The quick brown fox jumps over the lazy dog'


// function longestWord(strs){

//     let val=0
//     let res=''

//      let data = strs.split(' ')

//      for(let x of data){

//          if(val<x.length){

//              val=x.length
//              res=x
//          }
        
//       }

//       return res


//     }


// console.log(longestWord(str))





// ans-5


// add instagram massage pdf file sent option










