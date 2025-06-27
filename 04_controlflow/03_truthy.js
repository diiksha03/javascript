// ✅ 1. TRUTHY vs FALSY Values in JS

const userEmail = [];

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// 🔸 Output: Got user email
// 📝 Because an empty array [] is truthy in JS


// 🔹 FALSY Values (yeh false treat hote hain):
// false, 0, -0, 0n (BigInt), "", null, undefined, NaN

// 🔹 TRUTHY Values (yeh true treat hote hain):
// "0", "false", " ", [], {}, function(){}

// ⚠️ NOTE:
// [] and {} are truthy, but:
// Check if array is empty → use .length
// Check if object is empty → use Object.keys().length


// ✅ 2. CHECKING IF ARRAY IS EMPTY

if (userEmail.length === 0) {
    console.log("Array is empty");
}

// ✅ 3. CHECKING IF OBJECT IS EMPTY

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// 🔸 Output: Object is empty
// 📝 Object.keys() returns an array of keys → check its length


// ✅ 4. NULLISH COALESCING OPERATOR (??)

let val1;

// val1 = 5 ?? 10       // → 5
// val1 = null ?? 10    // → 10
// val1 = undefined ?? 15  // → 15
val1 = null ?? 10 ?? 20;

console.log(val1);

// 🔸 Output: 10
// 📝 ?? returns first non-null/undefined value
// Very useful to set default values safely


// ✅ 5. TERNARY OPERATOR (short form of if-else)

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

// 🔸 Output: more than 80

// 📝 Syntax:
// condition ? valueIfTrue : valueIfFalse

// Ternary is best for simple one-liner checks
