/* Object Constructor and SingleTon Pattern */

const userDetails = new Object() // Object Constructor - declaration Syntax

userDetails.name = "Diya Sagar"
userDetails.age = 22
userDetails.isLoggedIn = true
userDetails.userName = "diyaisdiva" 

console.log("> Object: ");
console.log(userDetails);


/* Difference between Object Constructor and Object Literal 
   i.e. const obj = {} vs const obj = new Object() 

   - There is nothing different here
     - In terms of functionality
     - But, The Second (constructor) is a singleton whereas the literal is not */


// Nested Objects

const userDetails2 = {
    userName: "Paul4All",
    "full name": {
        "first name": "Paul",
        "last name": "Joseph"
    }
}

// Accessing Nested Objects
console.log("\n> Nested Objects: ")
console.table({
    "Object as Whole": userDetails2,
    "First Name": userDetails2["full name"]["first name"],
    "Last Name": userDetails2["full name"]["last name"]
})


// ================= // 
console.log()




/* Merging of Objects */

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

/* # The same problem like array persist that
     - Object as whole is copied is used directly as name
     - Hence,

    Using the Spread Operator 
    
    OR
    
    Using the .assign() method */

const combinedObjNor = {obj1 , obj2}
const combinedObjSpr = {...obj1 , ...obj2}
const combinedObjAss = Object.assign({} , obj1,obj2)

console.log({
    "Direct Names": combinedObjNor,
    "Spread Operator": combinedObjSpr,
    "Assign Method": combinedObjAss
})




console.log("\n> Assign vs Spread: ")

/* .assign() vs ...Spread 
   - The main difference is how they work
   - Spread just copies the values from the original and makes a new enitity
   - Spread can add value to the new made entity but doesn't alter the original

   - Assign takes up a target value and hence modifies the new
   - As well as the original enitity as well */

const newUser = {name: "Vedant"}

const spreadedUser = {...newUser, age: 19}
const assignedUser = Object.assign(newUser, {age: 20})

console.table({
    "Original Object": newUser,
    "Spread Effect(within the new Entity)": spreadedUser,
    "Assigned Object(alters the original object)": assignedUser
})

// ========================== //



console.log();


/* Receiving details from a database: 
   - The data received are generally an Array of Objects */

const usersDatabase = [
    {
        name: "Varun",
        id: 123,
        email: "varun@web.com"
    },
    {
        name: "Rohit",
        id: 456,
        email: "rohit@web.com"
    },
    {
        name: "Pushpa",
        id: 789,
        email: "pushpa@web.com"
    },
]


/* Accessing the data:
   1. By Index and then object properties
   2. Using map() method */

// Index and Object Properties

console.log("\n> Database Data Access(from Array): ")
console.table({
    "First User": usersDatabase[0],
    "Second User": usersDatabase[1],
    "Third User": usersDatabase[2],
    "Second User Email": usersDatabase[1].email,
    "Third User ID": usersDatabase[2].id
})




/* Object Methods:
   1. Object.keys() - returns an array of keys
   2. Object.values() - returns an array of values
   3. Object.entries() - returns an array of key-value pairs */

console.log("\n> Object Methods: ")
console.table({
    "UserDetails Keys": Object.keys(userDetails),
    "UserDetails Values": Object.values(userDetails),
    "UserDetails Entries": Object.entries(userDetails)
})


// A Boolean returning method: .hasOwnProperty() - checks if the object has the property or not

console.log("\n> Checking if the object has the property or not: ")
console.table({
    "Has Property 'name'": userDetails.hasOwnProperty("name"),
    "Has Property 'email'": userDetails.hasOwnProperty("email")
})