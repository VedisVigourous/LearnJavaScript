/* =================================
    MORE ADVANCED DOM MANIPULATIONS
   ================================= */
   
/*********************** 
 * Traversing the DOM  *
 *********************** */ 

var itemList = document.querySelector('#items')

/* To get the "Parent Tag/Node of the selected item list "
 * We can hence target it to style and apply other customizations to it. */

console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor = '#dffff1'

// To get "Parent of Parent Element we can use the .parentNode multiple times"
console.log(itemList.parentNode.parentNode)


// Note An Alternate to parentNode is 'parentElement' which is more widely used and is more reliable than parentNode.

console.log("\n> Using parentElement: ")
console.log(itemList.parentElement.parentElement) 



/**************
 * Child Node 
 **************
 
 It index-wise displays all the child elements of the targetted element! 
 * Note: The text nodes included in the list represent the line-breaks in the code! 
         between two adjascent elements */

console.log("\n> Child Nodes: ")
console.log(itemList.childNodes)

// To get rid of the unwanted nodes - we use "children" tag instead! 

console.log("\n> Children: ")
console.log(itemList.children)

// As it is an array type: we can access the individual elements using the index number.
itemList.children[0].innerText = "📱 Smart-Phone"


/* * FirstChild & FirstElementChild
 * - FirstChild gives the first child node of the targetted element
 * - FirstElementChild gives the first child element of the targetted element 
  
 * firstChild is unexpected as it could return a text Node which is not the case with - "firstElementChild"

 Note: Just Like firstChild we have "Last Child" too! */


console.log("\n> First Element Child: ")
console.log(itemList.firstElementChild)
itemList.firstElementChild.style.color = "darkGreen"
itemList.firstElementChild.style.fontWeight = "bold" 
// Last Child
itemList.lastElementChild.style.backgroundColor = "#ecffe6"


/* =====================================
    Next Sibling & Next Element Sibling (& previous too!)
   ===================================== 
   
   - These are used to target the next adjascent element of the 
     - Current targeted tag! */

console.log("\n> Next Sibling: ")
console.log(itemList.nextSibling) 

// Just like the previous method : Next Element Sibling is way more reliable
console.log(itemList.nextElementSibling)

console.log("\n> Previous Sibling: ")
console.log(itemList.previousSibling)
console.log(itemList.previousElementSibling)
itemList.previousElementSibling.innerText = "Item List :" 
console.log("\n\n")





/* =================================================
    CREATING ELEMENTS & INSERTING THEM INTO THE DOM
   ================================================= */
   
// createElement function
var newDiv = document.createElement('div')

// Adding a class name
newDiv.className = 'newDiv'

// Adding an id
newDiv.id = 'newDivId'

// Adding an attribute - syntax: setAttribute('attributeName', 'attributeValue')
newDiv.setAttribute('title', 'newDivElement')


/* Creating a text node and appending it to the newly Created div element 
   - Steps: 1. Creating a text node - using - createTextNode() method
   -        2. Appending it to the div using - AppendChild() method */

var newDivText = document.createTextNode('Creator - VedisVigourous')
newDiv.appendChild(newDivText)

// Printing the newly created element - details
console.log(newDiv)



/* INSERTION
   - Step 1: Target the parent element where we want to insert the newly created element
    - Step 2: Use the insertBefore() method to insert the newly created element before a specific child element of the parent element */

// Targetting the parent element
var container = document.querySelector('header .container')
var beforeElement = document.querySelector('header h1')

// using - insertBefore() method: Syntax: parentElement.insertBefore(ElementToInsert, referenceElement)

container.insertBefore(newDiv, beforeElement)

// To Style we can use our old targetting methods! 
newDiv.style.fontWeight = '500'
newDiv.style.fontSize = '0.775rem'
newDiv.style.color = '#eeeeee'  