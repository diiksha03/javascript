// ✅ Function 1: sayMyName()
// 🔹 Definition: A basic function that simply prints letters of a name one by one.
// 🔹 Purpose: To understand how functions work without parameters or return values.

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName(); // 🔁 Calling the function. Output: H I T E S H (each on a new line)

// ✅ Function 2: addTwoNumbers()
// 🔹 Definition: This function takes two numbers as input, adds them, and returns the result.
// 🔹 Purpose: To understand how to pass arguments to functions and return values.

function addTwoNumbers(number1, number2){
    return number1 + number2; // 📌 Adds the two numbers and returns the result
}

const result = addTwoNumbers(3, 5); // Here 3 and 5 are passed → result will be 8
console.log("Result:", result); // Output: Result: 8

// ✅ Function 3: loginUserMessage()
// 🔹 Definition: This function takes a username and returns a login message. If no username is given, it uses "sam" as default.
// 🔹 Purpose: Learn default parameters and validation inside a function.

function loginUserMessage(username = "sam"){
    if(!username){ // This runs only if empty string or undefined is passed
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`; // Returns a success message
}

console.log(loginUserMessage("hitesh")); // Output: hitesh just logged in
console.log(loginUserMessage());         // Output: sam just logged in (uses default)

// ✅ Function 4: calculateCartPrice()
// 🔹 Definition: Accepts multiple prices as arguments and groups the extra ones in an array.
// 🔹 Purpose: Learn rest parameters (…num1) to handle variable number of arguments.

function calculateCartPrice(val1, val2, ...num1){
    return num1; // Returns an array containing all extra arguments after val1 and val2
}

console.log(calculateCartPrice(200, 400, 500, 2000));
// Output: [500, 2000] → val1 = 200, val2 = 400, rest (num1) = [500, 2000]

// ✅ Object to pass into a function
const user = {
    username: "hitesh",
    prices: 199
};

// ✅ Function 5: handleObject()
// 🔹 Definition: This function accepts an object and logs the username and price values.
// 🔹 Purpose: Learn how to pass objects to functions and access their properties using dot notation.

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user); // Using the object stored in variable
handleObject({
    username: "sam",
    price: 399
}); // Directly passing an object. Output: Username is sam and price is 399
// ✅ Array to test the next function
const myNewArray = [200, 400, 100, 600];

// ✅ Function 6: returnSecondValue()
// 🔹 Definition: Accepts an array and returns the value at index 1 (the second element).
// 🔹 Purpose: Practice working with arrays inside functions.

function returnSecondValue(getArray){
    return getArray[1]; // Returns the second element of the array
}

console.log(returnSecondValue(myNewArray));              // Output: 400
console.log(returnSecondValue([200, 400, 500, 1000]));   // Output: 400
