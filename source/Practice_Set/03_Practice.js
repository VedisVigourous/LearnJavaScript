// Foundations & Refresher
/* Q1: In your previous practice (02_Practice.js), you used ${} inside standard quotes "" which caused errors
. Rewrite a single line of code that correctly uses a template literal (backticks) to log your name and current year. */
const myDate = new Date()
console.log(`My name is Vedant and the current year is ${myDate.getFullYear()}!`);


/* Q2: Coding: Generate a random whole number between 50 and 100. Explain why you use + min at the end of the calculation 

Ans: + min is used to get the random number in the minimum range, i.e. fixing the least limit of the range! */
const rand = Math.floor((Math.random() * (100 - 50 + 1) + 50))
console.log(`Random No b/w 50 to 100: ${rand}`);


/* Q3: Logic: Use .endsWith() to check if a string ends with ".js". Compare this to the .includes() method you used earlier */
const str = "Language is javascript.js"
console.log(`Does the string ends with '.js' : ${str.endsWith(".js")}`);


console.log();
console.log(`*********`);
console.log();



// ARRAYS 

/* Q1: Create an array of 3 names. Use the .push() method to add a new name, then explain why the "Spread" operator [...array1, ...array2] is often preferred over .concat() for merging multiple arrays 

Ans: Spread opreator is considered over .concat() as concat have limitation of working on maximum of two arrays whereas spread operator can concatenate more than 2 arrays at once! */
const arrayNames = ["Vedant", "Yug", "Bhavishya"]
arrayNames.push("Rohit")
console.log(arrayNames);


/* Q2: Performance: Write a code snippet demonstrating the difference between .slice(1, 3) and .splice(1, 3). Specifically, log the original array after each operation to prove which one is "destructive" (mutates the original) */
const array = [1, 2, 3, 4, 5, 6]
console.log(`Original Array before operation: ${array}`);
const slicedArr = array.slice(2,4)
const splicedArr = array.splice(2,3)

console.table({
    "Original Array after operation": array,
    "Sliced Array": slicedArr,
    "Spliced Array": splicedArr
})


/* Q3: Coding: Use Array.isArray(), Array.from(), and Array.of() in three different examples. When would you use Array.from() on a string? 

Ans: We can use Array.from() on a string if we want to traverse the characters of the string as arrays are easily traversed in Js! */
const isArr = Array.isArray(array)
const fromArr = Array.from("Vedant")
const ofArr = Array.of(1,2,3)

console.table({
    "Is Array": isArr,
    "From Array": fromArr,
    "Of Array": ofArr
})


/* Q4: Logic: Given const scores = [100, 200, , 500,], use the .flat() method to create a single-level array. */
const scores = [100, 200, , 500,]
const flatScores = scores.flat(Infinity)
console.log(`Flattened Array: ${flatScores}`)


console.log();
console.log(`*********`);
console.log();


// OBJECTS

/* Q1: Theory: Explain the difference between an Object Literal and a Constructor (Singleton) object. Which one is created when you use Object.create? 

Ans: An Object Literal is created using curly braces {} and directly defines the object's properties and methods. A Constructor (Singleton) object is created using a function constructor with the 'new' keyword. When you use Object.create(), it creates a new object with a specified prototype object, but it doesn't call any constructor function. */


/* Q2: Coding (Symbols): Create a unique Symbol and use it as a key inside an object. Demonstrate how to access that specific symbol key (hint: it's different from standard dot notation) */
const uniqueSymbol = Symbol("symbol1")
const obj = {
    [uniqueSymbol]: "Symbol Accessed!",
    "first Name": "Vedant",
    "last Name": "Chauhaan",
    age: 19
}

console.log(`Accessing Symbol from Object: ${obj[uniqueSymbol]}`);


/* Q3: Methods: Write a script that uses Object.keys(), Object.values(), and Object.entries() on a single user object. What is the datatype of the result returned by these methods? 

Ans: Data Types-
1. keys -> String
2. value -> Depends on the original value
3. entries -> Array of key and its value */
console.table({
    "Keys": Object.keys(obj),
    "Value": Object.values(obj),
    "Entries": Object.entries(obj)
})


/* Q4: Nesting & Safety: Create a nested object customer -> details -> address. Use a check (or optional chaining if you've reached it) to safely log the city from the address. */
const customer = {
    name: "Vedant",
    details: {
        phone: 991,
        address: {
            "City": "Delhi",
            "Country": "India"
        }
    }
}

console.log(`City in Nested (Address): ${customer.details.address["City"]}`)


/* Q5: Integrity: Use Object.freeze() on an object. Attempt to change one of its properties and log the object to prove the change was ignored */
console.log(`> Original Customer Name: ${customer.name}`);
Object.freeze(customer)
customer.name = "Rohan"
console.log(`> Updated Customer Name [Not Changed!]: ${customer.name}`);


/* Q6: De-structuring: Given the object const course = {title: "JS in Hindi", price: "999", instructor: "Hitesh"}, use Object De-structuring to extract the instructor into a variable called teacher */
const course = {
    title: "JS in Hindi", 
    price: "999", 
    instructor: "Hitesh"
}

const {instructor: teacher} = course
console.log(`> Course Instructor: ${teacher}`);

// ********** //