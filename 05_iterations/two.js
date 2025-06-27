// ✅ 1. WHILE LOOP

let index = 0;

while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2;
}

// 🔹 Output:
// Value of index is 0
// Value of index is 2
// Value of index is 4
// ...
// Value of index is 10

// 🔸 Explanation:
// while loop tab tak chalta hai jab tak condition true hai.
// Agar condition false ho gayi → loop ruk jaata hai.


// ✅ 2. WHILE LOOP WITH ARRAY

let myArray = ['flash', 'batman', 'superman'];
let arr = 0;

while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1;
}

// 🔹 Output:
// Value is flash
// Value is batman
// Value is superman

// 🔸 Explanation:
// Array ke length tak loop chala, and har element print hua using index


// ✅ 3. DO...WHILE LOOP

let score = 11;

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);

// 🔹 Output:
// Score is 11

// 🔸 Explanation:
// do...while loop **pehle execute karta hai**, fir condition check karta hai.
// Isliye yahan 11 print hua **even though condition false thi**
// Ye at least **ek baar** toh chalta hi chalta hai!
