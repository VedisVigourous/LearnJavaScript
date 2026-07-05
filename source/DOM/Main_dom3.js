// /* ==================
//     MAKING FUNCTIONS
//    ================== 
   
//    * Functions add responsiveness to our webpage
//    * Syntax - function function_name(parameters){
//                   // Block of Code
//               } */
   
// // function buttonClick(param){
// //     // console.log("Button clicked!!")
// //     console.log(param.target.className)
// // }


// /* =================================
//     MAKING EVENTS (Event Listeners)
//    ================================= 
   
//    Event Listeners are used to detect any specified action on the webpage to the targetted element!
//    * Syntax: addEventListener('type_of_event' , actionToTake) 
   
//    * actions could be triggering a function or we can make a whole functions inside it! */

// var button = document.getElementById("button")

// // button.addEventListener('click', function(){
// //     console.log("Button clicked!")
// // })

// // OR

// // var button = document.getElementById("button").addEventListener('click', buttonClick) // It will trigger the above made function when the button is clicked!


// // We can use older styling, content changing methods etc. inside the event listener function as well!

// // button.addEventListener('click', function(){
// //     document.querySelector("#header-title").innerText = "List Submitted"
// //     document.querySelector("#main").style.backgroundColor = "lightGreen"
// // })



// /* *************************
//     Parameters in Functions
//     - We can name it anything relevant we want
//     - if we console-log the parameter name: we recieve all the available properties of the parameter object (further .id , .class etc can be accessed!)
//     - Ex. target - returns the element on which the event is triggered
//     - Ex. type - returns the type of event triggered (example - click)
//     - Ex. clientX - returns the X coordinate of the mouse pointer when the event was triggered
//     - Ex. clientY - returns the Y coordinate of the mouse pointer when the event was triggered
//     - Ex. altKey - returns true if alt key was pressed upon triggering the event, else false (sim, ctrlKey, shiftKey, metaKey)

//    ************************* */



// // #################################################################################################################################################### //


// /* ================================
//     ADDING OUTPUT TO THE WEB-PAGE
//    ================================ 
   
//    * innerHTML - is used to add html structure on any recorded event! */
   
// // function buttonClick2(){
// //     document.querySelector(".resultingOutput").innerHTML = "<hr></h3><h3>List Submitted</h3><hr>"
// //     console.log("HTML Added: Event Clicked!")
// // }

// // button.addEventListener('click' , buttonClick2)


// /* =================
//     TYPES OF EVENTS
//    ================= */ 

// // 1. CLICK: 
// // button.addEventListener('click' , returnEventType)

// // 2. DBLCLICK:
// // button.addEventListener('dblclick' , returnEventType)

// // 3. MOUSEDOWN: (doesn't wait for the mouse click to release and the event triggers!)
// // button.addEventListener('mousedown' , returnEventType)

// // 4. MOUSEUP: (waits for the mouse click to release and then the event triggers!)
// // button.addEventListener('mouseup' , returnEventType)

// var boxJs = document.querySelector('#box')

// // 5. MOUSEENTER: (triggers when the mouse enters the element) [Similarly, mouseleave]
// // boxJs.addEventListener('mouseenter' , returnEventType)

// // 6. IMPORTANT: MOUSEOVER: (triggers when the mouse enters the element or any of its child elements) [Similarly, mouseout]
// // boxJs.addEventListener('mouseover' , returnEventType)

// // 7. MOUSEMOVE: triggers with each movement within the element
// boxJs.addEventListener('mousemove' , returnEventType)
// function returnEventType(param){
//     param.preventDefault()
//     console.log(param.type)

//     // var output =  document.querySelector(".resultingOutput")
//     // output.innerHTML = "<hr><h3>MouseX: " + param.clientX + "</h3><br><h3>MouseY: " + param.clientY + "</h3><hr>"

//     // Something Cooler! - RGB Effect
//     document.querySelector('#main-header').style.backgroundColor = "rgb("+ param.offsetX +" , " + param.offsetY + " , 50)"
// }


// // ############################################################################################################################# //

// /* ********************************
//     Exploring Keyboard! - Events!
//    ******************************** */
  
// function keyboardEvents(param){
//     console.log(param.type)
//     console.log(param.target.value)

//     // Outputting in the webpage itself
//     document.querySelector('.resultingOutput').innerHTML = "<hr><h5><i>Adding item: " + param.target.value + "</i></h5><hr>"
// }

// // 1. Selecting the input box first
// var inputList = document.querySelector('input[type="text"')
// var form = document.querySelector('form')

// // 2. Adding Event Listener for inputList : type = keydown -> triggers at each key press before release! 
// //    Type 2: keyup - triggers with each key release! - Most relevant and captures each key! 
// //    Type 3: keypress - triggers with each key press
// // *** Type 4: & BESTT! = input - triggers with any type of input with the element! 
// inputList.addEventListener('input' , keyboardEvents)


// // ######## EXTRAS #########

// /* Focus & Blur Type: 
//    - Focus - Triggers when the input box is in focus
//    - Blur - Triggers with focus being removed from the focus! */

// /* Cut Copy Paste 
//    - Triggers when each of the action is being pefromed with the tag-value! */

// // inputList.addEventListener('cut' , keyboardEvents)

// /* Change event type! - works when the default options are changed!
//    - Used in select tag! */

// var select = document.querySelector('select')
// select.addEventListener('change', keyboardEvents)


// // ************ Submit type! ***********

// /* Note: Nothing will change as the webpage defaults back: by submitting or triggering any action!
//          Hence, use the property of - preventDefault() */

// form.addEventListener('submit' , returnEventType)