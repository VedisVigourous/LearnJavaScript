/* Reduce in JavaScrips is used to 
   -> Accumulate a single value from an array of values. 
   
   
   Syntax ->
   variable = collection.reduce( accumulator, incomingValue ) => accumulator + incomingValue, initialValue );

   Here ->
   1. accumulator -> is the variable that accumulates the incoming value
   2. incomingValue -> it is the current value being iterated from the collection
   3. initialValue -> it is the value that is used to initialize the accumulator. If not provided, the first value of the collection is used as the initial value. */


const arr = [1, 2, 3, 4, 5];

const sumOfArray = arr.reduce((accumulator, incomingValue) => accumulator + incomingValue, 0);

console.log(`\n> The Sum of the values of array is: ${sumOfArray}`); 


// Using Function Keyword 
console.log();

const sumOfArrayUsingFunction = arr.reduce(function(acc, currVal){
    console.log(`> Accumulator: ${acc} | Current Value: ${currVal}`);
    return acc + currVal
}, 0);

console.log(`> The Sum of the values of array using Function is: ${sumOfArrayUsingFunction}`); 


/* **************************************** */


// Reduce can also be used with an object

const obj = [
    {
        cartItem: 'SmartWatch',
        price: 5500
    },
    {
        cartItem: 'Headphones',
        price: 2500
    },
    {
        cartItem: 'Television',
        price: 35000
    },
    {
        cartItem: 'Laptop',
        price: 75000
    }
];


const totalPrice = obj.reduce((totVal, currItem) => {
    return totVal + currItem.price
}, 0);


console.log(`\n> Total Cart Price is: ${totalPrice}\n`)