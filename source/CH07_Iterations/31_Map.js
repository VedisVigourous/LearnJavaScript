/* Map operation in Js ->
   - It also holds a callback function 
   - It has the property of automatically returning 
   
   - Often, preffered over forEach because it can never return values! */

const numbers = [1, 2, 3, 4, 5, 6, 7]

const numbersx10 = numbers.map((values) => values * 10)


/* Chaining of operations 
   - The possibility of applying multiple operations on the same array in a sinle line of code! 
   - The succeeding chained method receives the value of preceeding operation! */

// Multiplying all the nums by 10 and adding 5 to them

const numbersx10add5filter25 = numbers.map((value) => value * 10).map((value) => value + 5).filter((gr25) => gr25 > 25);

console.table({
    "Numbers before Multiplication" : numbers,
    "Numbers after Multiplication": numbersx10,
    "Numbers after multiplication and addition [greater than 25]: ": numbersx10add5filter25
})