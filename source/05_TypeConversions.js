/* While Taking request from a form or an API, we do not know the type of data we will get.
   Hence, we need to find out and convert it to desired type for further processing. */

/* --- STEPS ---
 * 1. IDENTIFICATION: Using typeof operator
 * 2. CONVERSION: Using built-in functions
 */  

// Declaring a number 
let num = 42

// Identifying the type of num 
console.log("\n" , "> Var: Num - Type : " , typeof num + "\n") // Output: "number" 

// ============================== //
// TypeCasting or Type Conversion //
// ============================== //

// Now to make and operate strictly on number format we use: 
// 1. Number() function
let strNum = "42"
let convertedNum = Number(strNum)  // This is the process of coversion from string to number

// Originally 
console.log("> Typeof strNum: " + typeof strNum) // Output: "string"
// After conversion
console.log("> Type of converted strNum: " + typeof convertedNum + "\n") // Output: "number"



// ============================== // 



// Constraint: If the string cannot be converted to a number, it will return NaN (Not a Number) but the type will still be "number"
let invalidStrNum = "37abc"
let invalidConvertedNum = Number(invalidStrNum) 

console.log("> Invalid converted number: " + invalidConvertedNum) // Output: NaN 
console.log("> Invalid req type: " + typeof (invalidConvertedNum) + "\n") // Output: "number" 

/* Conversions of : 1. null ---> 0
                    2. undefined ---> NaN
                    3. true ---> 1
                    4. false ---> 0 
                    Some other invalid types like string ---> NaN (Not a number) 
                    
                    // Booleans works vice - versa too! */

// Boolean Conversion Example:   
let isCompOn = 1
let isCompOnBool = Boolean(isCompOn) // This will convert 1 to true
console.log("> Is Comp on: " + isCompOnBool + "\n") // Output: true

// String Conversion Example:
let numToStr = 42
let strFromNum = String(numToStr) // This will convert number to string
console.log("> String from number: " + strFromNum) // Output: "42"
console.log("> Type of strFromNum: " + typeof strFromNum , "\n") // Output: "string"


// ******************************** //


/* Common Type Conversion Issues:
 * "10" + "20" -> 1020
 * But if, we want to add those numbers and we receive one of them as a string
 * It will again - string concatenate them instead of adding
 * Ex. "10" + 20 -> 1020 : And not : 30
 * Similarly, 10 + "20" -> 1020
  
 * Note: But If there are more than two numbers
 * There are some rules written in ECMAScript  
 * Ex. for "10" + 20 + 30 -> It will be evaluated as ("10" + 20) + 30 -> "1020" + 30 -> "102030"
 *     But for 10 + 20 + "30" -> It will be evaluated as (10 + 20) + "30" -> 30 + "30" -> "3030"
 *     Reason: This is because of the left to right evaluation and the presence of string in the expression which causes  concatenation instead of addition.  */


let bothStr = "10" + "20"
console.log("> Concatenated string: " , bothStr) // Output: "1020"

let oneStr1 = "10" + 20
let oneStr2 = 10 + "20"
let bothNum = 10 + 20
console.table({"Num1 is Str: ": oneStr1 , "Num2 is Str: ": oneStr2 , "Both Num: " : bothNum})

let mixedExpr1 = "10" + 20 + 30 // Output: "102030" : Evaluated as ("10" + 20) + 30 -> "1020" + 30 -> "102030"
let mixedExpr2 = 10 + 20 + "30" // Output: "3030" : Evaluated as (10 + 20) + "30" -> 30 + "30" -> "3030" 
console.table({"Mixed Expr 1: ": mixedExpr1 , "Mixed Expr 2: ": mixedExpr2})

 
// Note: For more Conversion rules and details, refer to ECMAScript specification: https://262.ecma-international.org/5.1/#sec-9

/* Some other Tricky Conversions: (Deprecated for real world use but good for learning)
   * 1. +true -> 1   
   * 2. +false -> 0
   - Here, the unary plus operator is used to convert boolean values to numbers. [Nothing is like true+ etc]

   * Assignment Related:
     * assigning multipile variables to the same value: let a = b = 10
       - Here, b is assigned 10 first and then a is assigned the value of b. So, both a and b will have the value 10.
     * But, if we do: let a = b = c = 10
       - Here, c is assigned 10 first, then b is assigned the value of c, and finally a is assigned the value of b. So, all three variables a, b, and c will have the value 10.  */

let boolConv = +true
console.log("\n> Boolean to Number: " + boolConv , "\n") // Output: 1

let num1 , num2 , num3
num1 = num2 = num3 = 10
console.table({"Num1: ": num1 , "Num2: ": num2 , "Num3: ": num3}) // Output: Num1: 10, Num2: 10, Num3: 10

/* Increment and Decrement Operators:
   * 1. prefix increment: ++num -> This will first increment the value of num and then return the incremented value.
   * 2. postfix increment: num++ -> This will first return the current value of num and then increment it. 
   * Similarly for decrement operators. */

let incNum = 5
console.log("> Prefix Increment: " + ++incNum) // Output: 6 (First increments and then returns)
console.log("> Postfix Increment: " + incNum++) // Output: 6 and !7 because - (It First returns and then increments) 
console.log("> Current Value after Postfix Increment: " + incNum) // Output: 7 (Now it has been incremented [from last step])


/* Insight! 

Note - Minimal and Readable Codes are always preffered over complex and tricky ones. So, avoid such practices in real world projects. 

And, Precedence plays an important role in Execution of the expression */