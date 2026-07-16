console.log("")

/**************
    ARRAYS
 **************
 * Linear data structure that stores a collection of elements.
 * Initialized using square brackets [] and can hold any data type.
 * JavaScript arrays are dynamic, meaning they can grow and shrink in size.
 * They can hold different data types, including numbers, strings, objects, and even other arrays.
  
 * Note: Arrays make shallow copies of the elements, meaning that if you copy an array, changes to the original array will affect the copied array and vice versa! 
 */

const myArr = [10 ,11 ,12 ,3 ,4 ,15]

// Accessing array elements
console.log(`> Accessing Element at 0th Index: ${myArr[0]}`) // 10
console.log(`> Accessing Element at 1st Index: ${myArr[1]}`) // 11
console.log("")

// Declaration of Array using - KeyWords!
const myArr2 = new Array(1,2,3,4)

console.table({"Array 1": myArr,
    "Array 2": myArr2
})

console.log("\n> Methods \n")

/* ===============
    Array Methods
   =============== 
   
   Using: myArr: */

// 1. push(value) - Adds the given value to the end of the array!
myArr.push(90)
console.table({"After Push": myArr})

// 2. pop() - removes the last value of the Array
myArr.pop()
console.table({"After Pop": myArr})

// 3. unshift(<value_to_insert_after-shift>) - shifts all the value ahead adding the given value at 0th ind
myArr.unshift(9)
console.table({"After Unshift": myArr})

// 4. shift() - shifts the array by one preceding step thus removing 0th elem
myArr.shift()
console.table({"After Shift": myArr})

// 5. includes(value) - returns a bool by checking presence of given value
const check = myArr.includes(3)
console.table({"Includes": check})

// 6. indexOf(value) - returns the first occurence of a value (-1 if not present)
const ind = myArr.indexOf(15)
console.table({"Index(9)": ind})



// * Note: .join() method - it creates a string format of the array
const newArr = myArr.join()
console.table({
    "Original Array": myArr,
    "Joined Array": newArr,
    "Type (original)": typeof(myArr),
    "Type (joined)": typeof(newArr)
})


/* .slice(index1, index2) - * Used to extract a particular range from an array
                            * Doesn't modify the original array
                            * index2 is not included!
   
   .splice(index1, no_of_value_toRemove) - * It also extracts a range but
                             # Modifies the original array by removing the range
                             # index2 is included! */

console.log("> I. Original Array: " + myArr)

const sliArr = myArr.slice(3,5)
console.log("\n> Sliced(3,5): " + sliArr)
console.log("> II. Original Array after Slice: " + myArr)

const spliArr = myArr.splice(3,5)
console.log("\n> Spliced(3,5): " + spliArr)
console.log("> III. Original Array after Splice: " + myArr)