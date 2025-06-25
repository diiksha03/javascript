// Arrays in JavaScript

// Creating arrays
const myArr = [0, 1, 2, 3, 4, 5]  // Number array
const myHeors = ["shaktiman", "naagraj"] // String array (heroes)

// Another way to create an array using Array constructor
const myArr2 = new Array(1, 2, 3, 4)

// Accessing array elements
// console.log(myArr[1]); // Output: 1

// -----------------------------
// Array Methods

// Adding elements to the end
// myArr.push(6)
// myArr.push(7)

// Removing element from the end
// myArr.pop()

// Adding element to the beginning
// myArr.unshift(9)

// Removing element from the beginning
// myArr.shift()

// Check if value exists in array
// console.log(myArr.includes(9)); // true/false

// Get the index of a value
// console.log(myArr.indexOf(3)); // returns index or -1 if not found

// Convert array to string (comma-separated)
const newArr = myArr.join()
// console.log(myArr);     // original array remains unchanged
// console.log(newArr);    // becomes a string like "0,1,2,3,4,5"

// -----------------------------
// slice() vs splice()

console.log("A ", myArr);

// slice(start, end)
// ➤ Extracts a portion of the array
// ➤ Does NOT modify the original array
const myn1 = myArr.slice(1, 3)
console.log("Slice Output:", myn1); // [1, 2]
console.log("B ", myArr);           // myArr is unchanged

// splice(start, deleteCount)
// ➤ Removes elements from the array
// ➤ Modifies the original array
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);           // myArr is changed: [0, 4, 5]
console.log("Splice Output:", myn2); // [1, 2, 3]
