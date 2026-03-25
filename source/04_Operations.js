// ****************************** //
         // OPERATIONS //
// ****************************** //

//  Assigning a negative value of a variable
let a = 5 // Could be directly assigned as -5 
let b = -a
console.table({ "Value of b": b })

console.log("\n")

a = 12
b = 2

/* Basic Operations: 
    1. Addition: a + b
    2. Subtraction: a - b
    3. Multiplication: a * b
    4. Division: a / b
    5. Modulus: a % b (Gives the remainder of a divided by b)
    6. Exponentiation: a ** b (Gives a raised to the power of b)
*/

console.log("For a: 12 and b: 2, the operations are: \n")
let add = a+b 
let sub = a-b
let mul = a*b
let div = a/b
let mod = a%b
let exp = a**b // Acts as a^b (a to the power of b)

console.table({ "Addition": add, "Subtraction": sub, "Multiplication": mul, "Division": div, "Modulus": mod, "Exponentiation": exp })


/* String Concatenation:
    '+' operator can also be used to concatenate strings.
    For example:
*/

let string1 = "Greetings,"
let string2 = "Coders!"

let concatenatedString = string1 + " " + string2 

console.log("\n> Concatenated String: " , concatenatedString , "\n")
// Output = Greetings, Coders!  ** Note: Space can be manually added or be included as a part of string1 or string2
