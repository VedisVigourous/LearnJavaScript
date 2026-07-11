// // #1 Array concatenations:- 

const gta3dUniverse = ["Tommy Vercetti", "Carl Johnson", "Claude Speed"]
const gtaHdUniverse = ["Niko Bellic", "Michael De Santa", "Franklin Clinton", "Trevor Philips"]

// gta3dUniverse.push(gtaHdUniverse)
// /* - It doesn't really add the elements from second array to the first {instead} - it adds the array as a whole and we get an array inside of an array */
// console.log("\n> Array 1: ")
// console.log(gta3dUniverse)
// // # Accessing the 4th(3rd index) Element of the 3duniverse array would probably give the whole hduniverse array!
// console.log("\n> 3rd Index of Array 1:")
// console.log(gta3dUniverse[3])
// // # To access the elements within the nested array : We use [][]
// console.log("\n> 2nd Index of Array 2 in Array 1: " + gta3dUniverse[3][2])




/* =========================
   Note: The above methods are generally not the best practice hence we have,
         :- .concat() - it adds the elements and not the array as a whole!

         -- Need to use a new variable to access the array in best format!!
   ========================= */

// console.log("\n\n> Using .concat() ")
// const concatArray = gta3dUniverse.concat(gtaHdUniverse)
// console.log(concatArray)




/* =========================
   Note: Even Better method: 
   The Spread operator (...arrayName)
   : As the name suggest, spread means that the array element is released out of bound
     & hence operations are done on it!
   : Preffered over concat as it allows multiple array concatenation! 
   ========================= */

console.log("> Array using Spread: ")
const gtaSideChar = ["Jhonny Klebitz", "Gay Tony", "Jimmy De Santa"]
const spreadArr = [...gta3dUniverse , ...gtaHdUniverse, ...gtaSideChar]
console.log(spreadArr)





console.log()



// #2: Handling Multiple Nested Array
const nestedArrays = [1 , 2, [3 , 4] , 3 ,6 ,[7, 8, [10, 11]]]

/* Using .flat(<depth>) 
   : It concatenates all the nested array within the main array and returns a flat array! 
   : <depth>: It is the depth of nesting done in the main array
            : If not known! we can use 'Infinity' */

const flattenedArr = nestedArrays.flat(Infinity)
console.table({
    "Original Array": nestedArrays,
    "Flattened Array": flattenedArr
})



console.log();


/* #3 : Advanced Array Method */

// 1. Checking for Array: Array.isArray() - returns a boolean
console.log("> Checking for Array: " + Array.isArray("VedisVigourous"))

// 2. Converting to Array: Array.from() - returns an array
const strArr = Array.from("VedisVigourous")
console.log("> Converted String to Array: ", strArr)

/* Note: An Interesting case for Array.from()
   : If given a key value pair: It returns an empty array as it doens't know which value to take as the array element! */
const keyValuePair = {name: "VedisVigourous"}
const arrFromKeyValue = Array.from(keyValuePair)
console.log("> Converted Key-Value Pair to Array: ", arrFromKeyValue)


// 3. Array.of() - returns an array from set of elements
const val1 = "VedisVigourous"
const val2 = 100
const val3 = true
const arrOfVals = Array.of(val1, val2, val3)
console.log("> Converted Values to Array: ", arrOfVals)