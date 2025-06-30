// ✅ JavaScript map() & method chaining — Full Notes & Example

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 🔹 map() is used to transform each element in an array
// 🔹 It returns a NEW array based on what you return inside map()

// Example: Add 10 to each number
// const newNums = myNumers.map((num) => {
//     return num + 10;
// });

// ✅ Chaining map() and filter()
const newNums = myNumers
    .map((num) => num * 10)         // Step 1: Multiply each number by 10
    .map((num) => num + 1)          // Step 2: Add 1 to each result
    .filter((num) => num >= 40);    // Step 3: Keep only numbers >= 40

console.log(newNums); 
// Output: [ 41, 51, 61, 71, 81, 91, 101 ]

// 📌 Breakdown of Steps:
// Original:     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Step 1 (×10): [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// Step 2 (+1):  [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]
// Step 3 (≥40): [41, 51, 61, 71, 81, 91, 101]

// 🧠 Summary Notes:

// 🔹 map():
// - Transforms each item
// - Always returns a new array
// - Does NOT change original array

// 🔹 filter():
// - Filters items based on condition
// - Keeps only items where callback returns true

// 🔹 Chaining:
// - You can chain multiple map/filter methods
// - Execution is left to right
// - Great for clean, readable data transformations
