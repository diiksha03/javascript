// ✅ CONDITIONAL STATEMENTS & LOGICAL OPERATORS IN JS

// 🔹 1. Basic 'if-else' Example
const temperature = 41;

if (temperature === 40) {
    console.log("less than 50");// ye tab chlega jab if wla part true hoga 
} else {
    console.log("temperature is greater than 50");
}
// 📝 '===' checks value and type both
// 🔸 Output: temperature is greater than 50



// 🔸 Comparison Operators:
    // <   → less than
    // >   → greater than
    // <=  → less than or equal to
    // >=  → greater than or equal to
    // ==  → equal (value only)
    // === → equal (value + type)
    // !=  → not equal (value)
    // !== → not equal (value + type)



// 🔹 2. Scope with 'let' keyword
const score = 200;

if (score > 100) {
    let power = "fly";
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`); ❌ Error
// 📝 'let' is block-scoped → cannot access outside the if-block
// 🔸 Output: User power: fly
// (The second console.log will throw an error if uncommented)



// 🔹 3. One-line if statement
const balance = 1000;

if (balance > 500) console.log("test"), console.log("test2");
// 📝 Used for quick statements (not preferred for multiple lines)
// 🔸 Output:
// test
// test2



// 🔹 4. if - else if - else ladder
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}
// 📝 First matching condition runs, rest are skipped
// 🔸 Output: less than 1200



// 🔹 5. Logical AND (&&) Operator
const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}
// 📝 All conditions must be true; here 2==3 is false
// 🔸 Output: (Nothing will be printed)



// 🔹 6. Logical OR (||) Operator
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
// 📝 At least one true → prints the block
// 🔸 Output: User logged in



// 🔹 7. Summary for Quick Revision:
/*
- if(condition): Runs block if true
- else: Runs if 'if' fails
- else if: Checks another condition
- ===: Strict equal (value + type)
- &&: All conditions must be true
- ||: Any one condition should be true
- let: Block-scoped variable (only valid inside curly braces {})
*/

