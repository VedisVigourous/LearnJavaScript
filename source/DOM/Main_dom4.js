/* ============================
    MAKING THE LIST RESPONSIVE
   ============================= */

/* 1. ADDING AN ITEM TO LIST
   * Making variables for itemList and form
   * Adding an eventlistener for the form! 
   * Making function:
     # create variable for input text
     # creating a new list element
     # giving it the same class
     # putting text content from the input
     # adding as child to "List" */

var form = document.getElementById('addForm')
var listContainer = document.querySelector('#items')
var filter = document.getElementById('filter')


form.addEventListener('submit', itemAdd)

function itemAdd(param){
    param.preventDefault();

    var items = document.getElementById('item').value
    var li = document.createElement('li')
    li.className = "list-group-item"
    li.appendChild(document.createTextNode(items))

    // ADDING A DELETE BUTTON TOO! 
    var delBtn = document.createElement('button')
    delBtn.className = "btn btn-danger btn-sm float-end delete"
    delBtn.innerText = "Remove"
    li.appendChild(delBtn)

    listContainer.appendChild(li)
}



/* 2. REMOVING AN ITEM FROM LIST
   * Add an click event listener! 
   * Event listener calls a remove function 
   * Function Includes:
       # 1. Conditional check that the delete button is only clicked
       # 2. Nested Conditional using confirm method
       # 3. For true, target the li element[parent of cross button here]
       # 4. Remove it as a child of list Container */

listContainer.addEventListener('click', removeItem)

function removeItem(param){
    // Note: Used to check whether the targetted element has a specified class!
    if(param.target.classList.contains('delete')){
        // Note: confimrm is used to confirm user's action!
        if(confirm("Are you sure?")){
            var li = param.target.parentElement
            listContainer.removeChild(li)
        }
        else {
            console.log("Cancelled!")
        }
    }
}


/* 3. FILTERING THE LIST
   * Adding an event listener for the input field
   * Function includes: 
       # 1. Getting the input value and converting it to lowercase
       # 2. Getting all the list items as array!
       # 3. Looping through each item and checking if the input value is present in the text content of the item
       # 4. If present, display the item, else hide it */

filter.addEventListener('keyup', filterItem)

function filterItem(param){
    var filterInput = param.target.value.toLowerCase()
    
    var listItems = listContainer.getElementsByTagName('li')
    console.log(listItems)

    Array.from(listItems).forEach(function(item){
        var itemName = item.firstChild.textContent
        if(itemName.toLowerCase().indexOf(filterInput) != -1){
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
} 