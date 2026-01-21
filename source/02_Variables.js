// To declare a constant variable use 'const' - Cannot be reassigned 
const myAdmissionNum = 250055

// To declare a variable that can be reassigned use 'let'
let myGithub = "VigourousVed" // character string in double quotes

// 'var' is the old way of declaring variables, avoid using it in modern code (due to scope constraints - scopes refers to '{}')
var myOldVar = "This is old"

/* No keyword means the variable is global (not recommended)
   A global variable can be accessed from anywhere in the code */
myGlobalVar = "I am global"

// **** //

// Example of reassigning a 'let' variable
myGithub = "VedisVigourous" // No need to specify 'let' again and printing will show updated value

// Reassigning a constant variable will cause an error
// myAdmissionNum = 300066 // Uncommenting: As this line will throw an error

// **** //

console.log("Admission No: " , myAdmissionNum);
console.log("Github Username: " , myGithub); 

/* Insight! 1. const - fixed value, cannot be changed
            2. let - can be changed later in the code
            3. var - old way of let, avoid using it
            4. No keyword - creates a global variable, not recommended */


// Printing in a table!

console.table([myAdmissionNum , myOldVar , myGlobalVar , myGithub])

// Note: We can also declare variables without initializing them and the default value will be 'undefined'
let uninitializedVar;
console.log("Uninitialized Variable: ", uninitializedVar); // Output: undefined