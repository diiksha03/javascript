"use strict"; // 🔐 Enables strict mode (treats JS code as modern version)
// - Helps catch silent errors
// - Prevents usage of undeclared variables
// - Disallows certain bad practices in JavaScript

// ❌ alert(3 + 3); // Will not work in Node.js (alert is browser-specific)

// ✅ Code should be readable and clean — avoid breaking expressions across lines
console.log(3 
    + 
    3); // Outputs: 6

console.log("Hitesh"); // Outputs: Hitesh

// 🧠 Variables and Primitive Data Types

let name = "hitesh";      // string
let age = 18;             // number
let isLoggedIn = false;   // boolean
let state;                // undefined (declared but not assigned)

// 🔢 number      => for integers & decimals (up to 2^53)
// 🔢 bigint      => for very large integers
// 🔤 string      => text data ("", '', ``)
// 🔘 boolean     => true / false
// 🈳 null        => intentional empty value (type = object ❗️)
// ❓ undefined   => variable declared but not assigned
// 🔣 symbol      => for unique values (mostly in advanced use like React keys)

// 🧳 object      => collections like arrays, objects, functions etc.

// ✅ typeof operator
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null);      // Output: "object" ➤ 🤯 known JS quirk (legacy bug)

// ✅ Summary Note:
// typeof null === "object" ➤ this is a well-known bug in JavaScript
// null actually represents an empty value, not an object
