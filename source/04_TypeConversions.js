/* While Taking request from a form or an API, we do not know the type of data we will get.
   Hence, we need to find out and convert it to desired type for further processing. */

/* --- STEPS ---
 * 1. IDENTIFICATION: Using typeof operator
 * 2. CONVERSION: Using built-in functions
 */  

// Declaring a number 
let num = 42

// Identifying the type of num 
console.log("\n" + typeof num + "\n") // Output: "number" 

// ============================== //
// TypeCasting or Type Conversion //
// ============================== //

// Now to make and operate strictly on number format we use: 
// 1. Number() function
let strNum = "42"
let convertedNum = Number(strNum)  // This is the process of coversion from string to number

// Originally 
console.log("Typeof strNum: " + typeof strNum) // Output: "string"
// After conversion
console.log("Type of converted strNum: " + typeof convertedNum + "\n") // Output: "number"



// ============================== // 



// Constraint: If the string cannot be converted to a number, it will return NaN (Not a Number) but the type will still be "number"
let invalidStrNum = "37abc"
let invalidConvertedNum = Number(invalidStrNum) 

console.log("Invalid converted number: " + invalidConvertedNum) // Output: NaN 
console.log("Invalid req type: " + typeof (invalidConvertedNum) + "\n") // Output: "number" 

/* Conversions of : 1. null ---> 0
                    2. undefined ---> NaN
                    3. true ---> 1
                    4. false ---> 0 
                    Some other invalid types like string ---> NaN (Not a number) 
                    
                    // Booleans works vice - versa too! */

// Boolean Conversion Example:   
let isCompOn = 1
let isCompOnBool = Boolean(isCompOn) // This will convert 1 to true
console.log("Is Comp on: " + isCompOnBool + "\n") // Output: true

// String Conversion Example:
let numToStr = 42
let strFromNum = String(numToStr) // This will convert number to string
console.log("String from number: " + strFromNum) // Output: "42"
console.log("Type of strFromNum: " + typeof strFromNum) // Output: "string"
