// ------------------------------
// 🔹 Singleton and Object.create()
// ------------------------------

// "Singleton" objects are created using constructors like:
// const obj = new Object()
// OR using Object.create()
// Useful when you want to create an object with shared prototypes

// But in this code, we're using Object Literals (a more common approach)

// ------------------------------
// 🔹 Object Literals
// ------------------------------

const mySym = Symbol("key1") // Defining a Symbol — unique and hidden key

// Defining an object using literal notation
const JsUser = {
    name: "Hitesh",                   // key: value
    "full name": "Hitesh Choudhary", // key with space must be in quotes
    [mySym]: "mykey1",                // Symbol used as a property key (must be in square brackets)
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// ------------------------------
// 🔹 Accessing Object Properties
// ------------------------------

// console.log(JsUser.email)         // Dot notation
// console.log(JsUser["email"])      // Bracket notation (string key)
// console.log(JsUser["full name"])  // Required for keys with spaces
// console.log(JsUser[mySym])        // Accessing symbol-based key

// ------------------------------
// 🔹 Modifying Object Properties
// ------------------------------

// Overwriting email
JsUser.email = "hitesh@chatgpt.com"

// Freezing object to prevent further changes
// Object.freeze(JsUser)  // Uncomment to make object immutable

// This change won't happen if object is frozen
JsUser.email = "hitesh@microsoft.com"

// console.log(JsUser); // Check updated or frozen values

// ------------------------------
// 🔹 Adding Methods (Functions inside Objects)
// ------------------------------

// Simple method
JsUser.greeting = function() {
    console.log("Hello JS user");
}

// Method using `this` keyword to refer to the current object
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

// Call the methods
console.log(JsUser.greeting());     // Output: Hello JS user
console.log(JsUser.greetingTwo());  // Output: Hello JS user, Hitesh
