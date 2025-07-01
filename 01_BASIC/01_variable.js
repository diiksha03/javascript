// ✅ JavaScript Variables: const, let, var — Full Notes

// 🔹 const ➝ Constant variable, cannot be reassigned
const accountId = 144553;

// 🔹 let ➝ Block-scoped variable, can be reassigned
let accountEmail = "hitesh@google.com";

// 🔹 var ➝ Function-scoped variable (❌ avoid using this in modern JS)
var accountPassword = "12345";

// If you declare a variable without let/const/var, it becomes GLOBAL (❌ bad practice)
accountCity = "Jaipur"; // treated as global variable

// Variable declared but not assigned ➝ value is undefined
let accountState;

// ❌ Reassigning const variable ➝ Will throw error
// accountId = 2; // ❌ not allowed, because accountId is a constant

// ✅ Updating let and var variables
accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

// ✅ Logging a single value
console.log(accountId); // 144553

// ✅ Logging multiple values as a table (great for debugging)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
🧠 Summary Notes:

🔸 const
- Use when value should not change
- Must be initialized at the time of declaration
- Block scoped

🔸 let
- Use for variables that may change
- Block scoped (safe to use in loops, conditions)

🔸 var
- Function scoped (can cause unexpected issues)
- Gets hoisted (moved to top) with `undefined` value
- ❌ Avoid using var in modern JavaScript

🔸 console.table()
- Nicely prints values in a table format in console
- Great for visualizing multiple variables
*/
