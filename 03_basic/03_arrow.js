// ------------------ Object with Method ------------------

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // 👉 'this' refers to current object
        console.log(this); // 👉 Prints full user object
    }
}

// user.welcomeMessage() // 👉 hitesh , welcome to website
// user.username = "sam"
// user.welcomeMessage() // 👉 sam , welcome to website

// 🔴 Notes:
// ✅ 'this' keyword refers to the object calling the method
// ✅ Inside an object method, 'this' = that object



// ------------------ this inside normal function ------------------

function chai() {
    let username = "hitesh"
    console.log(this.username); // ❌ undefined
}

// chai();

// 🔴 Notes:
// ✅ In regular functions, 'this' doesn't refer to function context
// ❌ this.username = undefined (not pointing to chai's variables)



// ------------------ this inside arrow function ------------------

const chaiArrow = () => {
    let username = "hitesh"
    console.log(this); // 👉 In Node: {} | In browser: window
}

// chaiArrow()

// 🔴 Notes:
// ❗ Arrow functions do NOT get their own 'this'.
// They use 'this' from the surrounding lexical scope

// ------------------ Arrow Function Variations ------------------

// 1. Basic arrow function with return
// const addTwo = (num1, num2) => {
//     return num1 + 2;
// }

// 2. Implicit return (no need of return keyword)
const addTwoArrow = (num1, num2) => num1 + num2;

// 3. With parentheses (also implicit return)
const addTwoArrow2 = (num1, num2) => (num1 + num2);

// 4. Returning object: needs parentheses around object
const addTwoArrow3 = (num1, num2) => ({ username: "hitesh" });

console.log(addTwoArrow3(3, 4)); // 👉 output: { username: "hitesh" }

// 🔴 Notes:
// ✅ () => value  → Implicit return
// ✅ () => ({})   → To return an object, wrap it in ()

// ------------------ Array + forEach ------------------

const myArray = [2, 5, 3, 7, 8];

myArray.forEach(function (item) {
    console.log(item); // 👉 prints each number
});

// 🔴 Notes:
// ✅ forEach loops over array items
// ✅ It accepts a callback function with current item


