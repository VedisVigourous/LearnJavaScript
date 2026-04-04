/* Types of Memories in JavaScript 
   1. Stack Memory
      - All the primitive data types (number, string, boolean, null, undefined, symbol) are stored in stack memory.
      - Stack memory is used for static memory allocation.
      - It is faster than heap memory because of its LIFO (Last In First Out) structure. 

   2. Heap Memory 
      - All the reference data types (objects, arrays, functions) are stored in heap memory.
      - Heap memory is used for dynamic memory allocation.
      - It is slower than stack memory but more flexible.   */



/* STACK MEMORY REPRESENTATION - 

    |------------------|
    | Primitive Data   |
    |------------------|
    | Primitive Data   |
    |------------------|
    | Primitive Data   |
    |------------------|
    | Primitive Data   |
    |------------------| 
    
    Whenever we access, a value from a primitive datatype variable , a copy of that value is created in the stack memory. 
    And is then used in the execution context. 
    
    I.E. The original value is not modified, only a copy is used. */

let originalName = "Vedant"
let nickName = originalName
nickName = "Vedu"

console.log("\nSTACK MEMORY:-\n")
console.table({
    "Original Name: " : originalName,
    "Nick Name: " : nickName
})

/* Explanation: 
 * The moment we assign the value of originalName to nickName, a copy of the value "Vedant" is created in the stack memory for nickName.
 * When we change the value of nickName to "Vedu", it does not affect the originalName variable because it holds a separate copy of the value. */





/* HEAP MEMORY REPRESENTATION -
    |-----------------|                        ============================
    |------STACK------|                        ||                         ||
    |-----------------|                        ||                         ||
    |-----------------|                        ||        OBJECTS          ||
    |------STACK------|  ------------------>   ||         ARRAY           ||
    |-----------------|        Pointer         ||        FUNCTIONS        ||
    |-----------------|                        ||                         ||
    |------STACK------|                        ||                         ||
    |-----------------|                        ============================ 
    
    Now the variable assigned to the referenced data 
    Upon Accessing: Creates a reference or pointer to the value stored in the heap memory.
    I.E. The variable holds the memory address of the value in the heap, not the actual value itself. */ 

    /* NOTE: If we have assign second variable holding value of first:
     * Both variables will point to the same memory location in the heap.
     * Modifying the value through one variable will affect the other variable since they reference the same object in memory. */

//Example: 

let user1 = {
    name: "Vedant",
}

let user2 = user1
user2.name = "Vedu" // Updating value of the object through user2

console.log("\nHEAP MEMORY:-\n")
console.table({
    "User 1: " : user1,
    "User 2: " : user2
})

/* Explanation:
 * When we assign user1 to user2, both variables point to the same object in the heap memory.
 * Therefore, when we update the github property through user2, it also updates the value for user1 since they reference the same object. */


/* Think of it Like: 
   * A person named Vedant is: 
     - A human 
     - A student 
     - A son 
     - A brother etc. 
    
     = All these roles are the variables pointing to same person -> In Stack memory.

   * Now if a role changes the person : 
     - i.e. Brother changes his hairstyle, then all the roles will be affected because they are all pointing to the same person.

     = Hence, it is the same reference in the -> Heap Memory.

     InShort:: Same person may be assigned to different roles, but if the person changes, all the roles will be affected. */