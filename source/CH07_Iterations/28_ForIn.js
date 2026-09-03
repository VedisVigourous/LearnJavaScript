/* Objects are iterable using the For In loop 

   - Keys are iterable where as value is to be accessed by appropriate notation

   Syntax:

   for (declaration in iterable){
        // body of loop
   }   */

const fruits = {
    "red": "apple",
    "yellow": "mango",
    "orange": "orange",
    "green": "kiwi"
}

console.log(`\n> Fruits and their corresponding colour -`)
for (const key in fruits) {
    console.log(`Color is ${key} and fruit associated is ${fruits.key}`)
}


/* For in loop on Arrays 
   - Note by default it returns the indeces of the loop 
   - To extract the keys we need to again use the bracket notation */

let fruitArr = ["apple" , "mango" , "orange" , "kiwi"]

console.log(`\n> Fruits array value `)
for (const values in fruitArr) {
    console.log(`Value of Array - ${fruitArr[values]}`)
}


/* For in Loop on maps 

   ===================
   Maps are actually not iteratable hence no answer would be logged 
   ===================        */

let map = new Map();
map.set("name", "Vedant");
map.set("age", 20);
map.set("city", "Delhi");


for (const keys in map){
    console.log(`${keys}`)
}

