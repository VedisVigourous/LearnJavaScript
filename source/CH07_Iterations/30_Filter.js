const arr = ["red", "yellow", "green", "blue", "orange"]

/* For Each loop never returns anything, it just iterates over the array and executes the function for each element in the array. */

const values = arr.forEach((val) => {
    return val;
})

console.log(`\n> Values of arr is - ${values}`)

/* Returns undefined instead of the array */ 


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


/* Filter Operation ->
   - Just like forEach, filter also contains a fallback function.
   - As the name suggess, filter is used to filter out the values from the array based on a {condition}.

*/

let filteredNums = nums.filter((num) => num > 4)

/* Note: We used the implicit return above hence 'return' keyword is not used. If we use the explicit return i.e. curly braces, then we need to use the 'return' keyword. */

let explicitFilteredNums = nums.filter((num) => {
    return num > 4
})

console.log(`\n> Filtered values of nums is - [${filteredNums}]`)
console.log(`\n> Explicit Filtered values of nums is - [${explicitFilteredNums}]`)


// ******************************************************************************************** //


const cars = [
  { carSno: 1, maker: "Toyota", model: "Corolla", year: 2020 },
  { carSno: 2, maker: "Suzuki", model: "Brezza", year: 2023 },
  { carSno: 3, maker: "Honda", model: "City", year: 2026 },
  { carSno: 4, maker: "Ford", model: "Focus", year: 2018 },
  { carSno: 5, maker: "BMW", model: "X3", year: 2025 },
  { carSno: 6, maker: "Ford", model: "Figo", year: 2010 },
  { carSno: 7, maker: "Mercedes", model: "C-Class", year: 2017 },
  { carSno: 8, maker: "Nissan", model: "Altima", year: 2026 },
  { carSno: 9, maker: "Mercedes", model: "G-Class", year: 2019 },
  { carSno: 10, maker: "Ford", model: "Mustang", year: 2024 },
];


/* Accesssing Cars with Filter Operation */

let fordCars = cars.filter ((frd) => (frd.maker === "Ford"));

console.log(`\nFord Cars available are -`)
console.log(fordCars)

let oldCars = cars.filter((olCar) => (olCar.year <= 2020))

console.log(`\nCars of or before 2020 -`)
console.log(oldCars)

let oldFordCars = cars.filter((olFoCars) => {
    return (olFoCars.year <=2020) && (olFoCars.maker === "Ford")
})

console.log(`\nFord Cars of or before 2020 -`)
console.log(oldFordCars) 