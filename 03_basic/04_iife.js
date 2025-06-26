// radheyradhey------------------ IIFE: Immediately Invoked Function Expression ------------------

/*
🧠 NOTES:
- IIFE is a function that runs immediately after it is defined.
- Syntax: (function definition)(execution)
- Used to avoid polluting the global scope.
- Helpful in DB connection, config setup, etc.
*/

// ✅ Named IIFE
(function chai() {
    console.log(`DB CONNECTED`);
})();

/*
📝 Explanation:
- This is a named IIFE.
- Function `chai()` is immediately invoked.
- It runs only once and doesn't leave anything in global scope.
- Output: DB CONNECTED
*/

// ✅ Arrow Function IIFE with parameter
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');

/*
📝 Explanation:
- This is an arrow function IIFE.
- It takes one parameter `name` and prints it in the message.
- Immediately invoked with argument `'hitesh'`.
- Output: DB CONNECTED TWO hitesh
*/

// 🔴 Key Notes:
// ✅ IIFE helps in:
//    - Avoiding global scope pollution
//    - One-time function execution
// ✅ Always wrap the function in ()
// ✅ Don't forget the ending semicolon `;` between two IIFEs
