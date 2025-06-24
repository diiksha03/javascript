//*************************** NUMBERS ******************************

// ✅ Primitive Number
const score = 200;
console.log(score); // ➤ 200 (simple primitive number)

// ✅ Number Object (not recommended for regular use)
const balance = new Number(200);
console.log(balance); // ➤ [Number: 200] (Number wrapped as object)

// ✅ typeof tells the type of variable
console.log(typeof score);   // ➤ "number" (primitive type)
console.log(typeof balance); // ➤ "object" (because created using new Number())

// ✅ .toFixed(n)
// ➤ Returns a string with the number rounded to 'n' decimal places
console.log(balance.toFixed(4)); // ➤ "200.0000" decimal ke baad ke 4 no fixed 

// ✅ .toPrecision(n)
// ➤ Formats number to n significant digits (rounds if needed)
const otherno = 2883.7867;
console.log(otherno.toPrecision(3)); // ➤ "2.88e+3" (rounded to 3 significant digits)

// ✅ toLocaleString()
// ➤ Formats number according to locale (adds commas in Indian/US format)
const hundread = 10000000;
console.log(hundread); // ➤ 10000000 (raw number)

// For Indian numbering system: lakh/crore format
console.log(hundread.toLocaleString('en-In')); // ➤ "1,00,00,000"




//***************************  MATHS ****************************

// ✅ The Math object – built-in object for mathematical operations
console.log(Math); 
// ➤ Logs all methods under Math (like round, ceil, floor, random, etc.)

// ✅ Math.abs(x)
// ➤ Returns the absolute (positive) value
console.log(Math.abs(-7)); // ➤ 7

// ✅ Math.round(x)
// ➤ Rounds to the nearest whole number
console.log(Math.round(4.6)); // ➤ 5
console.log(Math.round(4.4)); // ➤ 4

// ✅ Math.ceil(x)
// ➤ Always rounds UP to the nearest integer
console.log(Math.ceil(4.2)); // ➤ 5

// ✅ Math.floor(x)
// ➤ Always rounds DOWN to the nearest integer
console.log(Math.floor(4.9)); // ➤ 4

// ✅ Math.min(a, b, c...)
// ➤ Returns the smallest value from a list
console.log(Math.min(8.65, 78)); // ➤ 8.65

// ✅ Math.random()
// ➤ Returns a random number between 0 and 1 (not inclusive of 1)
console.log(Math.random()); // ➤ something like 0.37248

// ✅ (Math.random() * 10) + 1
// ➤ Generates a random decimal between 1 and 11
console.log((Math.random() * 10) + 1); // ➤ 1.0 to 11.0 approx

// ✅ Generate Random Integer Between min and max (inclusive)
const min = 10;
const max = 20;

// ✅ Formula: Math.floor(Math.random() * (max - min + 1)) + min
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// ➤ Random integer from 10 to 20 (inclusive)





