/* Date in javascript is a single-moment in time 
   * It is platform independent and counted in milliseconds
   * Started from :: 1 January 1970 (UTC) :: 
    
   * JavaScript has however changed the date object to "Temporal Module" which a better and efficient way of accessing dates
     - but it is not very widely used due to the modern widely accepted browser doesn't support it! 
*/

/* Creating a standard date object 
   - And storing it in a variable & thus printing it! 
   
   - Converting the date to String gives another Formatted Date! 
   - Using the .toString() method */

let myDate = new Date()
console.log("\nStandard Date: ")
console.log(myDate)

console.log("\nFormatted Date: " + myDate.toString() + "\n")



/* Other Important Methods: 
   * toDateString() - Returns the date portion of a Date object as a human-readable string
   * toISOString() - Returns the date portion of a Date object as a string, using the ISO standard format
   * toUTCString() - Returns the date portion of a Date object as a string, using the UTC standard format
   * toLocaleDateString() - Returns the date portion of a Date object as a string, using the local time zone 
   * toJSON() - Returns the date in JSON Format similar to the ISO format! 
   * toLocaleTimeSTring() - Return the time portion of the current date! */

console.table({
    "toDateString()": myDate.toDateString(),
    "toISOString()": myDate.toISOString(),
    "toUTCString()": myDate.toUTCString(),
    "toLocaleDateString()": myDate.toLocaleDateString(),
    "toJSON()": myDate.toJSON(),
    "toLocaleTimeString": myDate.toLocaleTimeString()
})


// Note: If we print the type of Date it will show an "OBJECT"
console.log("Type of Date: " + typeof(myDate))


console.log("\n*********************")



/* To Create a specified date we can use the Date constructor! 
   * We just have to provide the date values and the Date will pe set to that time! 
   * Format should be : (YYYY, MM , DD) or (YYYY, MM , DD, HH, MM, SS, MS)
   * Note: The Months in JavaScript start from 0 and !1 */

let mySpecifiedDate = new Date(2026, 0 , 5)
console.log("\n> My Specified Date: " + mySpecifiedDate.toDateString())
let mySpecifiedDateTime = new Date(2026, 0 , 5, 10, 30, 45)
console.log("> Specified Date with Time: " + mySpecifiedDateTime.toLocaleString())

/* To Create a date with our own format! we could use the "" in the constructor
   * Ex. For MM-DD-YYYY format */

let constructedDate = new Date("07-03-2026")
console.log("> Formatted Date: " + constructedDate.toDateString())


console.log("\n*********************")

console.log("\n> Some Important Get Methods (For Today's date): ")

/* Some important get methods related to the date object: 
   * getDate() - Returns the day of the month (from 1-31)
   * getDay() - Returns the day of the week (from 0-6)
   * getFullYear() - Returns the year (four digits for 4-digit years)
   * getHours() - Returns the hour (from 0-23)
   * getMilliseconds() - Returns the milliseconds (from 0-999) */

console.table({
      "getDate()": myDate.getDate(),
      "getDay()": myDate.getDay(),
      "getFullYear()": myDate.getFullYear(),
      "getHours()": myDate.getHours(),
      "getMilliseconds()": myDate.getMilliseconds()
})



// Conversion of time 
console.log("\n> Current Time: " + myDate.getTime())
// console.log(Date.now()) // Also returns the current time in milliseconds since January 1, 1970 

// Converting milliseconds to seconds, with the help of Math.floor() 
console.log("> Current Time in Seconds: " + Math.floor(myDate.getTime() / 1000)) 



/* A Hidden Gem Method! >> toLocaleString()
   * We can specify the format of what the values should be printed in the date object! 

   Syntax: date.toLocaleString([locales[, options]]) 
   - Options includes:
     - weekday
     - year
     - month
     - day
     - hour
     - minute
     - second  in our own specified format! 
     
     - Pro tip: Use ctrl+space in VS Code to get the available options!*/


console.log("\n*********************")

let newDate = new Date()
console.log("\n> Formatted Date (en-IN): " + newDate.toLocaleString('en-IN' , {weekday: 'long' , year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' , hour12: true}))

// Note: We can use the default locale and specify the timezone in the options later to get the date in our own timezone!