/* During the changes in versions of Javascript : preservance of both new and old code needed to be done for smooth functioning
   ~ Hence to declare the code as a newer version in javascript we use "use strict" directive 
   ~ Refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode */

"use strict";

// Note: Some commands doesn't work with node the same way as they do in the browser console. Ex
// alert() doesn't work in nodejs


// ===================== //


/* DATATYPES IN JAVASCRIPT: 
    ~ Primitve datatypes:
        1. Number - for all kinds of numbers (integers and floating-point)
        2. String - for text, enclosed in single or double quotes
        3. Boolean - true or false values
        4. bigint - for very large integers
        5. null - represents 'no value' [standard value] 
        6. undefined - represents 'value not assigned' [default value] 
        7. Symbol - represents a unique identifier (used in advanced scenarios) 
*/

/* null vs undefined:
    1. - null is an assigned value that represents 'no value' 
       - Syntax: let emptyVar = null;

    2. - undefined means a variable has been declared but not assigned a value
       - Syntax: let uninitializedVar;
*/ 

// To access the type of a variable use 'typeof' operator: 
console.log("\nDatatype of Name is: ", typeof "Vedant"); // Output: string
console.log("Datatype of Age is: ", typeof 19);   // Output: number

// ** Insight! Null is of type 'object' (this is a known quirk in JavaScript) ** //
// ** && Undefined is of type 'undefined' ** //
console.log("Null datatype is: ", typeof null);
console.log("Undefined datatype is: ", typeof undefined);

console.log("\n***************");
console.log("***************\n");

// Declaration and Printing of different datatypes
// 1. Number
let num = 19
console.log("Num: ", num);

// 2. String
let git = "VedisVigourous"
console.log("String: " , git);

// 3. Boolean
let isOnline = true
console.log("Online? " , isOnline , "\n");

