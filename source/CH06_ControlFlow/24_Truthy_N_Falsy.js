/* Truthy and Falsy Values - are set of values that we assume to be true or false in a boolean context. In JavaScript, there are only 6 falsy values: 
- false
- 0
- ""
- null
- undefined
- NaN.

All other values are considered truthy. */

// Example an empty array vs empty string

if ([]) {
    console.log("> Empty array is truthy");
}

if ("") {
    console.log("> Empty string is truthy");
} else {
    console.log("> Empty string is falsy");
}



/* NOTE: Falsy values if compared with each other using the equality operator (==) will return true. For example, null == undefined will return true. However, if we use the strict equality operator (===), it will return false. 

Some Exceptions =
NaN === NaN will return false, even though both are NaN values. */

console.table({
    "false == 0": false == 0,
    "0 == ''": 0 == '',
    "null == undefined": null == undefined
})