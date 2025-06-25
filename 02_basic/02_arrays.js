// Arrays in JavaScript

// Creating two arrays: one for Marvel heroes and one for DC heroes
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// Using push() adds the entire dc_heros array as a single element inside marvel_heros
// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // Output: ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// console.log(marvel_heros[3][1]); // Output: "flash" (accessing nested array element)

// Using concat() to merge both arrays into a new array (does NOT modify original arrays)
const allHeros = marvel_heros.concat(dc_heros)
console.log("Using concat:", allHeros)

// Using spread operator (...) to merge arrays — cleaner and more modern than concat
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log("Using spread:", all_new_heros)

// -------------------------
// Flattening nested arrays

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// flat(Infinity) is used to completely flatten deeply nested arrays into a single array
const real_another_array = another_array.flat(Infinity)
console.log("Flattened array:", real_another_array)
// Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// -------------------------
// Array utility methods

// Array.isArray() checks if a variable is an array
console.log(Array.isArray("Hitesh")) // false, because "Hitesh" is a string

// Array.from() converts a string (or iterable) to an array of characters
console.log(Array.from("Hitesh")) // ['H', 'i', 't', 'e', 's', 'h']

// Interesting case: Array.from() with an object (non-iterable)
// It returns an empty array unless you give it specific logic to convert object properties
console.log(Array.from({ name: "hitesh" })) // []

// -------------------------
// Array.of() creates a new array from the arguments you pass

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // [100, 200, 300]
