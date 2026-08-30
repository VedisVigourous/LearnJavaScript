/* Writing Implicit scoped if-else
   - It is written in a single line.
   - Curly Braces are not required. */

if (true) console.log("Implicit Condition True");

/* If there are more than two conditions
   - We can use if-else if ladder.
   - An optional else statement can be added for final condition */

let money = 1000

if (money < 500) {
    console.log("Money less than 500");
}
else if (money < 800){
    console.log("Money less than 800");
}
else {
    console.log("Money greater than 800");
    
}

/* Logical And (&&) - Executes block of code only if all condition specified are true.
   Logical Or (||) - Executes block of code even if one condition is true */

const oldUser = true
const newUser = false

const mobileLogin = false
const emailLogin = true

if (newUser && emailLogin) {
    console.log("Good to go...");
}
else if (newUser && mobileLogin){
    console.log("Update Email");
}
else if (oldUser && (mobileLogin || emailLogin)){
    console.log("Old User ... Good to go")
}