// ---------------------
// 🌟 Example 1: Sum of Numbers using reduce()
// ---------------------

const myNums = [1, 2, 3];

// reduce() takes a callback function and an initial value (here, 0)
// acc = accumulator (stores the ongoing total)
// curr = current value from the array during each loop
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal); // Output: 6

// How reduce works step-by-step:
// Step 1: acc = 0, curr = 1 → acc + curr = 1
// Step 2: acc = 1, curr = 2 → acc + curr = 3
// Step 3: acc = 3, curr = 3 → acc + curr = 6
// Final Result = 6


// ---------------------
// 🛒 Example 2: Calculate Total Price in Shopping Cart
// ---------------------

const shoppingCart = [
    { itemName: "js course", price: 2999 },
    { itemName: "py course", price: 999 },
    { itemName: "mobile dev course", price: 5999 },
    { itemName: "data science course", price: 12999 }
];

// reduce() will loop through each item in the shoppingCart array
// acc = total price so far
// item = current object (like a product)
// We add each item's price to the accumulator
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay); // Output: 22996

// How reduce works step-by-step:
// Step 1: acc = 0, item.price = 2999 → acc = 2999
// Step 2: acc = 2999, item.price = 999 → acc = 3998
// Step 3: acc = 3998, item.price = 5999 → acc = 9997
// Step 4: acc = 9997, item.price = 12999 → acc = 22996
// Final Total = 22996
