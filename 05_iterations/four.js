// ✅ JavaScript Loops & Iteration — Full Summary with Notes

// ✅ 1. for...in with Object
// for...in is used to iterate over keys (property names) of an object

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
};

for (const key in myObject) {
    // key = 'js', 'cpp', 'rb', 'swift'
    // myObject[key] gives the value for each key
    console.log(`${key} shortcut is for ${myObject[key]}`);
}



// ✅ 2. for...in with Array
// for...in gives the indexes (like 0, 1, 2, ...)
// programming[key] gives the value at that index

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    console.log(programming[key]); // prints array values using index
}

// ⚠️ Note: For arrays, for...of is preferred because it gives direct values
for (const lang of programming) {
    console.log(lang); // prints: js, rb, py, java, cpp
}



// ❌ 3. for...in does NOT work with Map
// Map is not enumerable using for...in

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India"); // 'IN' key is overwritten

// ❌ This won't work — no output, or may throw error
// for (const key in map) {
//     console.log(key);
// }

// ✅ Correct way: use for...of with destructuring
for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
}
// Output:
// IN :- India
// USA :- United States of America
// Fr :- France



// 🔁 Quick Revision Notes:
// for...in  ➤ Works with objects & arrays ➤ Gives keys / indexes
// for...of  ➤ Works with arrays, strings, maps ➤ Gives values
// Map       ➤ Use for...of (not for...in) ➤ Gives [key, value] pairs
