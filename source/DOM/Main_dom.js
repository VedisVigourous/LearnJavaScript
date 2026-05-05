/* To get all the properties and methods of an object we use .dir method 
   - all the props will be available in console of browser */
console.dir(document) // props and methods of document object will be available 


// Note: to access any properties of an object we use '.'
console.log(document.domain) // log is used to print in the console
console.log(document.URL)
console.log(document.title)
console.log(document.doctype)

// Grabbing a portion of html using console.log 
console.log(document.body)
console.log(document.head)

console.log(document.all) // Provides with all the used tags with indexing according to order used!
console.log(document.all[10]) // Grabbing of a tag using it's index to get it's details and props


/* Note: All these items are not read-only and can be changed from the script 
   - Ex. Changing title of webpage from script */
document.title = "Vedant's Item-Lister" // Changes will be reflected on the browser