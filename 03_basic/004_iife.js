// ✅ Immediately Invoked Function Expression (IIFE)
// 👉 A function that runs immediately after it's defined
// 👉 Used to create a private/local scope and avoid polluting global scope

// 🔹 Named IIFE Example
(function chai() {
    // This function is named 'chai'
    // But it's not stored in any variable or called later
    // It runs immediately because of the wrapping () and final ()
    console.log(`DB CONNECTED`); // Output: DB CONNECTED
})(); // <-- This last () calls the function immediately

// 🔹 Arrow Function IIFE Example with parameter
((name) => {
    // This is an anonymous arrow function (no name)
    // It takes 'name' as a parameter and is immediately invoked
    console.log(`DB CONNECTED TWO ${name}`); // Output: DB CONNECTED TWO hitesh
})('hitesh'); // <-- Passing 'hitesh' as the argument to the function
