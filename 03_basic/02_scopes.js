// -------------------- Block Scope --------------------

let a = 300; // ✅ Yeh 'a' globally (or outer scope mein) define hai

if (true) {
    let a = 10;      // ✅ Block ke andar ek alag 'a' ban gaya (shadowing)
    const b = 20;    // ✅ 'b' sirf is block mein accessible hai
    // console.log("INNER:", a); // 👉 output: 10 (block ka a print hoga)
}

console.log(a);     // 👉 output: 300 (outer a)
                    // ❌ console.log(b); // Error: b is not accessible yahan

// 🔴 Note:
// let / const = block scoped → sirf {} ke andar kaam karega
// var hota to bahar bhi access hota





// -------------------- Lexical Scope (Function inside Function) --------------------

function one() {
    const username = "hitesh"; // outer variable

    function two() {
        const website = "youtube";
        console.log(username); // 👉 output: hitesh (inner function outer ka access kar sakta hai)
    }

    // console.log(website); // ❌ Error: 'website' sirf inner function ke andar hi accessible hai

    two(); // ✅ inner function ko call kiya
}

// one(); // uncomment karo to run hoga

// 🔴 Note:
// Inner functions → outer variables ko access kar sakte hain
// Isse lexical scope ya closure kehte hain



// -------------------- Nested if + Block Scope --------------------

if (true) {
    const username = "hitesh";

    if (username === "hitesh") {
        const website = " youtube";
        console.log(username + website); // 👉 output: hitesh youtube
    }

    // console.log(website); // ❌ Error: inner block ka variable outer block mein use nahi hota
}

// console.log(username); // ❌ Error: 'username' bhi sirf block mein accessible tha

// 🔴 Note:
// let/const → sirf usi block mein kaam karega jismein defined ho


// -------------------- Function Declaration (Hoisted) --------------------

console.log(addone(5)); // 👉 output: 6 (function pehle call kiya, phir define kiya — works)

function addone(num) {
    return num + 1;
}

// 🔴 Note:
// Function declarations hoist hote hain → matlab pehle call kar sakte ho



// -------------------- Function Expression (Not Hoisted) --------------------

addTwo(5); // ❌ Error: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;
};

// 🔴 Note:
// Function expression ko call karne ke liye pehle define karna zaroori hai
// Kyunki yeh ek const variable hai, jo hoist nahi hota (temporal dead zone)





