/* For Each loop as a method

   -> For each loop in js contains an anonymous function in it's body
   -> The Value to be iterated is the parameter of this function
   -> Hence, we can access the parameter and work on it as we want 
   
   Syntax ->
   iterable.forEach( anonymousFn(parameter) { body } 
   
   anonymouseFn can be normal function or arrow function   
   
   ===================================================
   Anonymous Function is known as 'Callback Function'
   ===================================================   */


const arr1 = [1, 2, 3, 4, 5]

let sum1 = 0
arr1.forEach(function(val) {
    sum1 += val
})

console.log(`\n> Sum of the value in arr1 - ${sum1}`)


const arr2 = [1, 2, 3, 4, 5, 10]

let sum2 = 0
arr2.forEach((val) => {
    sum2 += val
})

console.log(`> Sum of the value in arr2 - ${sum2}`)




/* Passing an already defined function in forEach loop

   Syntax:
   iterable.forEach( <referenceOfTheFunction> ) 
   
   Note: Don't execute the function in forEach just the reference needs to be passed
   - Gives TypeError!    
*/ 


function printingArr(val) {
    console.log(val)
};

console.log(`\n> Value of Arr1 is -`)
arr1.forEach(printingArr)



/* Note: For Each loop is capable to extract not just the value but
   1. index of the value
   2. the iterable itself 
   
   Syntax:
   iterable.forEach((value, index, array) => { ... })
*/

console.log(`\n> Value of Arr2 is -`)
arr2.forEach((val, index, arr) => {
    console.log(`> Value - ${val}, Index - ${index}, Array - ${arr}`)
})




/* Iterating JSON formats that is 
   -> Array of objects using for Each loop

   Syntax:
   iterable.forEach(function(parameter) { obj.key })
*/

const data = [
    {
        student: "Vedant",
        rollNo: 271
    },
    {
        student: "Vansh",
        rollNo: 272
    },
    {
        student: "Tushar",
        rollNo: 250
    },
    {
        student: "Uttam",
        rollNo: 278
    }
]


console.log(`\n> Student Data is -`)
data.forEach((val) => {
    console.log(`> Student Name - ${val.student}, Roll No - ${val.rollNo}`)
})