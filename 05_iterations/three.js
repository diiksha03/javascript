// ✅ FOR...OF LOOP

// The 'for...of' loop is used to iterate over **iterable objects** like Arrays, Strings, Maps, Sets etc.

// 👉 Example with Array
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // Output: 1 2 3 4 5
    console.log(num);
}

// 👉 Example with String
const greetings = "Hello world!";

for (const greet of greetings) {
    // Output: Each char is H, e, l, l, o,  , w, o, r, l, d, !
    console.log(`Each char is ${greet}`);
}

// --------------------------------------------

// ✅ MAPS IN JAVASCRIPT

// Maps store key-value pairs and remember the original insertion order of the keys.
// Keys in Maps can be of any data type (unlike objects where keys are always strings or symbols).

const map = new Map();

// 👉 Adding values to the map using set()
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India"); // Duplicate key - Overwrites previous value for 'IN'

// 👉 Output the entire map
console.log(map); 
// Map(3) { 'IN' => 'India', 'USA' => 'United States of America', 'Fr' => 'France' }

// 👉 Looping through Map using for...of
for (const [key, value] of map) {
    // Output: IN :- India
    //         USA :- United States of America
    //         Fr :- France
    console.log(key, ':-', value);
}

// --------------------------------------------

// ❌ FOR...OF with OBJECT ❌
// Objects are **not iterable** by default using `for...of`
// If you try to do this, it will throw an error: "myObject is not iterable"

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
};

// ❌ This will give an error:
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// ✅ To loop through an object, use `for...in` or `Object.entries()`

// ✅ Option 1: for...in (for keys)
for (const key in myObject) {
    console.log(key, ':-', myObject[key]);
}

// ✅ Option 2: Object.entries() (to use for...of style)
for (const [key, value] of Object.entries(myObject)) {
    console.log(key, ':-', value);
}
