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
// myAdmissionNum = 300066; // Commenting: As this line will throw an error
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
let uninitializedVar
console.log("Uninitialized Variable: ", uninitializedVar); // Output: undefined


/* ========== SEMICOLON USAGE (;) ==========
 * 
 * Semicolons are OPTIONAL in JavaScript (Auto Semicolon Insertion - ASI)
 * 
 * MUST USE semicolons when:
 * ✓ Multiple statements on one line: let x = 5; let y = 10;
 * ✓ Line starts with [ ( ` + - / after previous statement
 * 
 * Example of problem without semicolon:
 *   let a = 5
 *   [1, 2, 3].forEach(fn)  // ERROR! JS thinks: a[1,2,3]
 * 
 * Best Practice:
 * → Choose one style (always use OR never use) and be consistent
 * → Use ESLint/Prettier to enforce your choice
 * 
 */