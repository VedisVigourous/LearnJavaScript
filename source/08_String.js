/* Declaration and Storing of the String: 
   - Assign it a variable just like with other data types.
   - String can be declared using single quotes (' '), double quotes (" "), or backticks (` `).
   - Backticks allow us formatted string in JavaScript, which is called Template Literals. i.e. using other datatypes inside the string itself.
*/

let name = "Vedant"
let github = 'VedisVigourous'

console.log("\n1. " + name + " - " + github) 

/* Note: We can use '+' or ',' to concatenate string in log but now backtics are the most efficient way to do so. - Known as -

-- String Interpolation:
    - Write the string within backtics 
    - Use ${} to insert variables or expressions inside the string.
    - Template Literals is the technique which is used within.
*/

console.log(`\n2. My name is ${name} and my Git Acc is: ${github}\n`) 


/* String Declaration using Objects -
   - new keyword is used to initialize an object
   - We use the String constructor then to declare a String within a variable.
*/

const carOwned = new String('Caddilac')
console.log("3. Object: " , carOwned)

/* Note: In browser - console we can even see the details of String letters by expanding the output 
         - 1. Index of each letter
         - 2. length of the String
         - 3. Prototype i.e. String 
         - 4. Value assigned {PrimitiveValue}
         - 5. ** Methods list that can be used.
*/

/* ===================
     String Methods
   =================== */

console.log("\n *. " , carOwned.__proto__) /* Note: Prototype is parent of obj and contains all the methods that can be used on the obj. */
   
console.table({
    "1. Letter @ 5th Index: " : carOwned[5] ,
    "2. length : " : carOwned.length ,
    "3. toUpperCase() : " : carOwned.toUpperCase() ,
    "4. toLowerCase() : " : carOwned.toLowerCase() ,
    "5. charAt(5) : " : carOwned.charAt(5) , /* A substitute to traditional [index] method. */
    "6. indexOf('l') : " : carOwned.indexOf('l') , 
})


// -- Slicing of a String :
const slicedCar = carOwned.substring(0 , 3) /* (StartValue , LastValue[not included]) */
console.log("7. " , slicedCar)

// Also note: We can use slice() method , it takes negative values too and starts extracting string in reverse.
const newString = "Reverse"
//  -ve :          7654321
console.log("8. " , newString.slice(-7 , -4)) /* Output: Rev */       


// -- Trim: Remove unwanted spaces before and after a string
const spacedStr = "       Vedant       "
console.log("9. Trimmed String: " , spacedStr.trim())


// -- Replace: Replace a part of the string with another string
const ogStr = "I am learning JavaScript"
const newStr = ogStr.replace("JavaScript" , "Java")
console.log("10. Replaced String (js to java): " , newStr) /* Output: I am learning Java */


// -- Boolean Return: includes() - checks if a string consist the provided part
const boolStr = "I am a JavaScript Developer"
console.log("11. Does the string include 'JavaScript' ? " , boolStr.includes("JavaScript")) /* Output: true */


/* -- Convert String to Array: split() 
   - splits the string into an array based on a specified separator 
   - [separator can be space, comma, etc. depending on how we want to split the string. In this case we are splitting it based on space.] */
const sentence = "Hello World, Welcome to JavaScript"
const wordsArray = sentence.split(" ")
console.log("12. String to Array: " , wordsArray) /* Output: [ 'Hello', 'World,', 'Welcome', 'to', 'JavaScript' ] */


/* Note: All the methods get listed in the browser console: and their info can be gathered on MDN Docs */ 