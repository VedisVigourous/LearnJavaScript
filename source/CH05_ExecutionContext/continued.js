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