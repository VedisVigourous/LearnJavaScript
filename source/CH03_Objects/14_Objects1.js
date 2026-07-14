/* - Object is a collection of key-value pairs
   - It is non primitive data type
   - Mutable in nature 
   - Value could be of any data type */ 

/* Declaring of an Object: 
   1. Object Literal
   2. Object Constructor / Object.create() 
   
   Concept: Singleton Object - It means the object is one of its kind and each object declared using Literal is not a Singleton
   - But using constructor the object is a Singleton! */


/* Concept: Using Symbols as Object Properties:
   - Symbol is a primitive data type that is used to create unique identifiers for object properties.
   - It helps to avoid property name collisions and provides a way to create private or hidden properties in objects. 
   
   - Note: Using name of symbol directly as a property makes it a String
   - Hence, to use a symbol we need to use square brackets
   - i.e. [symbolName] = "Value"
   - Accessed using Bracket Notation!  */

const mySymbol = Symbol("mySymbol");

// Object Literal:
const user = {
    name: "Vedant",
    [mySymbol]: "This is a symbol property",
    age: 19,
    major: "Computer Science",
    "user email": "vadanta592007@gmail.com",
    lastLogins: ["2024-06-01", "2024-06-02", "2024-06-03"]
}


/* Accessing the Object Properties:
   1. Dot Notation -> objectName.propertyName
   2. Bracket Notation -> objectName["propertyName"] */

console.table({
   "Dot Notation": user.name,
   "Bracket Notation": user["user email"],
   "Symbol Property": user[mySymbol],
})

/* Drawback of Dot Notation: 
   * As the property name is hard coded as a string,
   * If it contains white spaces there is no option left to access it using Dot,
     hence the only option left is to use Bracket Notation. 
   * Cannot access Symbols! */



console.log("")


// Updating and Freezing of Object Properties: 
user["user email"] = "vadanta592007@hotmail.com"
console.log("Updated Email:", user["user email"])

user.greeting = function(){
      console.log("Hello, User!")
}

/* Functions can also be added as a property
   - These functions are called as methods of the object
   - These methods can be invoked using Dot Notation or Bracket Notation 
   
   - If we call the function name without parenthesis - we get reference of the function
   - If we call it with parenthesis, we get the result  */

console.table({
   "Function Reference": user.greeting,
   "Function Result": user.greeting()
})

// Note: The log method of function is called before the table, hence result -> table = printed!

// To freeze any modifications further we can use Object.freeze() method
Object.freeze(user)

user.age = 20
console.log("After freezing (Age) - remains 19!:", user["age"]) // Doesn't update as the object is frozen

// ================================= //