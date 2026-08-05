/* Handling unknown number of arguments in a function! 

   - Using Rest operator -> '...args' 
   - It combines all the passed argument and returns as an array! 
   
   - Any other variable passed before rest operator hold separate values given! */

function productList(...products){
    return products
}

console.log("\n> Rest operator on Functions ->")
console.log(productList(200,300,400))


/* Functions & Objects!
   - Functions can accept objects as arguments
   - We can even pass a whole structure (object) as an argument */

const obj = {
    "name": "Vedant",
    age: 19
}

function printDetails(user){
    console.log(`\n> Function & Objects ->`)
    console.log(`Name: ${user.name}`)
    console.log(`Age: ${user.age}`)
}


printDetails(obj)
// Passing the whole object!
printDetails({
    name: "Rohit",
    age: 20
})



/* Arrays & Functions!
    - Functions can accept arrays as arguments
    - We can even pass a whole structure (array) as an argument */

const arr = [1,2,3,4,5]

function printArray(arrArg){
    console.log(`\n> Function & Arrays ->`)
    console.log(arrArg)
}

printArray(arr) 
// Passing the whole array!
printArray([6,7,8,9,10])

// Getting a particular index value from the array passed as an argument
console.log(`\n> Accessing Array Elements ->`)
function arraySecondIndex(arrArg){
    console.log(arrArg[2])
}

arraySecondIndex(arr)