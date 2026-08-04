function levelOne(){
    const username = "Vedant"

    function levelTwo(){
        const github = "vedisvigourous"
        console.log("Accessing: Parent parameter and self parameter: ")
        console.table({
            username,
            github
        })
    }

    levelTwo()

    // console.log("Accessing: Child parameter: ")
    // console.log(github);

    /* Gives an error - as github is not accessible in this scope */
}

levelOne()


/* Note: The Scope Level concept is related to Humans:
         - A Child asking for a chocolate from his parent is a valid request.
            - A Parent asking for a chocolate from his child is an invalid request.
            
        - This concept of accessing of parent parameters is also known as - Closure! 
        - Could have been done using nested - conditionals too! and many more!! */



        // ****************** //
        console.log();
        

/* Concept of Mini-Hoisting:
   - Whenever a function or any other entity is declared using const or let and is accessed before declaration!
   - It will give an error - as it is not hoisted to the top of the scope.
    - But if the same is declared using var or globally!, it will be hoisted to the top of the scope and will give an output. */

hoistingExample()

function hoistingExample() {
    console.log("Global Function!")
}

// hoistingExample2() // Gives an error - as it is not hoisted to the top of the scope. Could have been accessed after declaration!

const hoistingExample2 = function() {
    console.log("Constant Function Expression!")
}

hoistingExample2() // Works fine - as it is accessed after declaration!
