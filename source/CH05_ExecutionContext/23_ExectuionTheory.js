// Consider an Example code

let num1 = 10
let num2 = 20

function sum(n1, n2) {
    let total = n1 + n2
    return total
}

let result1 = sum(num1, num2) 
let result2 = sum(100, 200) 


/* Execution Process of the above code is as follows:
   1. Global Exection Context is created 
      -> And it is allocated in "this" keyword

   2. Memory Creation Phase 
      -> All the declared variables allocated a memory space with [value "undefined"]
      -> Functions are allocated a memory space with [value "function definition"]

   3. Execution Phase
      -> Value assigned in the code is now alloted to the variables 
      -> Functions create another Execution Context when invoked and the same process is repeated for that function as a new environment
    
   4. */

/* In terms of code
   1. num1 -> undefined
      num2 -> undefined
      sum -> function definition
      result1 -> undefined
      result2 -> undefined

   2. num1 -> 10
      num2 -> 20
      sum -> new execution context created
         n1 -> undefined
         n2 -> undefined
         total -> undefined
         
         // Execution 
            n1 -> 10
            n2 -> 20
            total -> 30
            return total
      
      // Deletion of sum execution context [iMPORTANT]

    3. result1 -> value returned from sum function = 30 
       result2 -> value returned from sum function = 300   */

console.table({
    "result1": result1,
    "result2": result2
})
   
/* For nested function
   -> Execution takes place generally in a stack manner
   -> That is the last the function invoked is the first to be executed and deleted from the stack 
   -> And accordingly deleted that is
   -> Last In First Out (LIFO) manner */