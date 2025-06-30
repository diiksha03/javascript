// ✅ JavaScript is a Dynamically Typed Language
// ➤ Data types are assigned at runtime based on the value
// ➤ No need to explicitly declare type (like int, string, etc.)

// ============================
// ✅ Primitive Data Types
// ➤ Immutable, compared by value, stored in Stack
// ============================

// 1. String
let name = "Diksha";  // textual data
console.log(typeof name); // "string"

// 2. Number
let age = 21;
let pi = 3.14;
let notANumber = NaN; // special number type (Not a Number)
console.log(typeof age); // "number"

// 3. Boolean
let isLoggedIn = true;
console.log(typeof isLoggedIn); // "boolean"

// 4. Undefined ➤ variable declared but no value assigned
let x;
console.log(typeof x); // "undefined"

// 5. Null ➤ intentionally empty
let empty = null;
console.log(typeof empty); // "object" ❗ Known JS bug (null is not an object)

// 6. Symbol ➤ used for unique values (mostly in advanced JS)
let id = Symbol('123');
console.log(typeof id); // "symbol"

// 7. BigInt ➤ very large integers (introduced in ES2020)
let bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber); // "bigint"


// ============================
// ✅ Non-Primitive Data Types
// ➤ Mutable, compared by reference, stored in Heap
// ============================

// 1. Object ➤ key-value pair collection
let person = { name: "Diksha", age: 21 };
console.log(typeof person); // "object"

// 2. Array ➤ ordered list (special type of object)
let scores = [95, 85, 75];
console.log(typeof scores); // "object"

// 3. Function ➤ block of reusable code (also a special object)
function greet() {
  return "Hello!";
}
console.log(typeof greet); // "function"

// 4. Date, Map, Set, RegExp ➤ all considered objects
let today = new Date();
console.log(typeof today); // "object"


// ============================
// ✅ Stack vs Heap Memory
// ============================

// Stack Memory ➤ Used for Primitive Data Types
// ➤ A copy of the variable is passed
let myyt = "diksha.com";
let anothername = myyt;
anothername = "hello";

console.log(myyt);        // "diksha.com" ➤ original remains unchanged
console.log(anothername); // "hello" ➤ only the copy changed


// Heap Memory ➤ Used for Non-Primitive Data Types
// ➤ Reference (address) is passed, so both variables point to same object
let user = {
  email: "siksha@123",
  upi: "hgsktqw"
};

let user2 = user;
user2.email = "hello@123";

console.log(user);  // email also changed in original ➤ because both point to same memory
console.log(user2); // same result

// 🧠 Summary:
// Primitive ➤ Stored in Stack ➤ Copy passed ➤ Original not affected
// Non-Primitive ➤ Stored in Heap ➤ Reference passed ➤ Original gets affected
