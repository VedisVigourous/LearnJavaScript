// /* To get all the properties and methods of an object we use .dir method 
//    - all the props will be available in console of browser */
// console.dir(document) // props and methods of document object will be available 


// // Note: to access any properties of an object we use '.'
// console.log(document.domain) // log is used to print in the console
// console.log(document.URL)
// console.log(document.title)
// console.log(document.doctype)

// // Grabbing a portion of html using console.log 
// console.log(document.body)
// console.log(document.head)

// console.log(document.all) // Provides with all the used tags with indexing according to order used!
// console.log(document.all[10]) // Grabbing of a tag using it's index to get it's details and props

// // We can also change the content of a tag using it's index in the document.all array
// document.all[16].textContent = "Hello World" // Changes the text of the tag with index 16 to "Hello World"

// // Note: If a tag is not present in the document and we console.log it, it will return null
// console.log(document.links) // null - because there are no links in the document, if there were any links then it would have returned an array of all the links present in the document


// /* Note: All these items are not read-only and can be changed from the script 
//    - Ex. Changing title of webpage from script */
// document.title = "Vedant's Item-Lister" // Changes will be reflected on the browser



// /* -----------------------------
//     GETELEMENTBYID
//    ----------------------------- */

// // To retrieve an element by its ID we mentioned in the html tag we use getElementById method
// console.log(document.getElementById('header-title')) // retrieves the element with id 'header-title' and logs it in the console

// // We can also store the retrieved element in a variable and then manipulate it
// var headerTitle = document.getElementById('header-title') // stores the element with id 'header-title' in the variable headerTitle
// console.log(headerTitle) // logs the stored element in the console

// // To change the content of an element
// // headerTitle.textContent = "Item List" // changes the text content of the element stored in headerTitle to "Item List"
// // headerTitle.innerText = "My Item List" // changes the inner text of the element stored in headerTitle to "My Item List"

// /* InnerText : Pays attention to the styling applied to the element and will not return the text of an element if it is hidden using CSS
//    TextContent : Will return the text of an element even if it is hidden using CSS */

// // Example: The span element in header-title is hidden
// console.log(headerTitle.textContent) // Returns the hidden items
// console.log(headerTitle.innerText)  // Hides the hidden items and only returns the visible text

// // InnerHTML : It is used to change the content of an element, not by swapping the tag but integrating the new content inside the existing tag
// headerTitle.innerHTML = '<span style="color: #7FF532">Item List</span>' // Changes the content of headerTitle to "Item List" with red color by integrating it inside the existing h1 tag

// /* Changing style of a tag: - 1. Assiging variable to the tag and then
//                               2. Using the variable changing the style */
// var header = document.getElementById('main-header')
// header.style.borderBottom = 'solid 2px #7FF532';
// header.style.boxShadow = '0 0 10px 3px #7FF532'; 



// /* ============================
//      GETELEMENTSBYCLASSNAME
//    ============================ 
   
//    1. Assigining a variable by extracting element using gebcn
//    2. Accessing through the index displayed on the console */

// var listItems = document.getElementsByClassName('list-group-item')
// console.log(listItems) // Gives proper indexed list of items related to the class 
// listItems[2].textContent = "Milk"
// listItems[2].style.fontWeight = 'bold' 
// listItems[2].style.backgroundColor = 'lightBlue'

// /* Changing styles of all the listItems at once:
//    - Directly accessing throught listItems gives error 
//    - As it is not a particular tag but a collection or an array 
   
//    - Hence, we have to loop through the collection to change it's styling */

// for(var i = 0 ; i < listItems.length ; i++) {
//    listItems[i].style.backgroundColor = '#f4f4f4'
// }


// /* ============================
//        GETELEMENTSBYTAGNAME
//    ============================ 
   
//    - Exactly same as the className, just passing the tag name instead of class name */

// var li = document.getElementsByTagName('li')
// console.log(li) // Gives proper indexed list of items related to the tag name 
// li[1].textContent = "Bread"
// li[1].style.fontWeight = 'bold' 
// li[1].style.backgroundColor = 'lightBlue'

// /* Again for multiple items we have to loop through the collection to change it's styling */

// /* ============================
//          QUERYSELECTOR              
//    ============================ 
   
//    - Any type of selector can be targetted whether it's a class, id, or tag 
//    - classes are selected using '.' 
//    - ids are selected using '#' 
//    - tags are selected using their actual tag name */

// var header = document.querySelector('.container') // Class targetted
// header.style.backgroundColor = 'darkGreen'
// header.style.textAlign = 'center'
// header.style.padding = '10px'

// var input = document.querySelector('input') // tag targetted
// input.value = "Hello World" // changes the value of the input tag to "Hello World"

// // We have a submit button too... hence we can target a specific input tag using nth-child selector
// var submit = document.querySelector('input[type="submit"]') // tag with attribute selector
// submit.value = "Send" // changes the value of the submit button to "SEND"

// // Or the item list -
// var secondItem = document.querySelector('.list-group-item:nth-child(2)') // class with nth-child selector
// secondItem.style.color = 'blue' // changes the background color of the second item to light green

// var lastItem = document.querySelector('.list-group-item:last-child') // class with last-child selector
// lastItem.style.color = 'red' // changes the background color of the last item to light green


// /* ============================
//          QUERYSELECTORALL
//    ============================ 
   
//    - It selects all the elements matching the specified selector and returns a node list! 
//    - Array Functions can be then used to manipulate the returned node list */

// var title = document.querySelectorAll('.title') // class targetted
// console.log(title) // gives a node list of all the elements with class 'title' 
// title[0].textContent = "Add to List" // changes the text content of the first element with class 'title' to "Item Lister"

// /* Selecting odd and even items using nth-child selector */
// var odd = document.querySelectorAll('li:nth-child(odd)') // tag with nth-child selector for odd items
// var even = document.querySelectorAll('li:nth-child(even)') // tag with nth-child selector for even items

// for (var i = 0 ; i < odd.length ; i++) {
//    odd[i].style.backgroundColor = '#f4f4f4' // changes the background color of odd items to light gray
//    even[i].style.backgroundColor = '#ccc' // changes the background color of even items to darker gray
// }

// /* ==============
//     END OF FILE
//    ============== */