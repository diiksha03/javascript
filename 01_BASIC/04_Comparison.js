// ⚠️ Try to avoid these types of comparisons — they often lead to confusion

console.log(null > 0);       // false
console.log(null == 0);      // false
console.log(null >= 0);      // true (confusing!)

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false




// ✅ JavaScript Comparison with null & undefined — Full Notes

// ⚠️ These comparisons are tricky and often lead to confusion
// It's best to avoid such comparisons in real-world code

console.log(null > 0);      // false
// Reason: null is converted to 0 when using >, <, >=, <=
// So this becomes: 0 > 0 → false

console.log(null == 0);     // false
// Reason: null is only loosely equal to undefined, not to 0
// No type coercion to number in loose equality check with null

console.log(null >= 0);     // true ❗️
// Reason: null is converted to 0, so: 0 >= 0 → true
// 🔥 This is what makes it confusing — same value gives different result in different comparisons

console.log(undefined == 0); // false
// undefined is only equal to null (in loose comparison)
// Not equal to 0, false, or any other value

console.log(undefined > 0);  // false
// undefined becomes NaN when used in numeric comparisons
// NaN > 0 → false

console.log(undefined < 0);  // false
// NaN < 0 → false

// 🧠 Summary Table:

// Expression             | Result | Why
//------------------------|--------|---------------------------------------------
// null > 0               | false  | null becomes 0 → 0 > 0 → false
// null == 0              | false  | null is not equal to 0
// null >= 0              | true   | null becomes 0 → 0 >= 0 → true ❗️
// undefined == 0         | false  | undefined is not equal to 0
// undefined > 0 / < 0    | false  | undefined becomes NaN → comparisons fail

// ✅ Best Practice:
// Always use === (strict equality) to avoid automatic type conversion
// Avoid comparing null or undefined directly in mathematical expressions

