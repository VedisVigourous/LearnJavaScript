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

// We can also change the content of a tag using it's index in the document.all array
// document.all[14].textContent = "Hello World" // Changes the text of the tag with index 14 to "Hello World"

// Note: If a tag is not present in the document and we console.log it, it will return null
console.log(document.links) // null - because there are no links in the document, if there were any links then it would have returned an array of all the links present in the document


/* Note: All these items are not read-only and can be changed from the script 
   - Ex. Changing title of webpage from script */
document.title = "Vedant's Item-Lister" // Changes will be reflected on the browser