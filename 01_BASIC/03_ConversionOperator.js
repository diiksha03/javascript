// ✅ JavaScript Type Conversion + Operations — Full Notes

let score = "hitesh";

// typeof tells the type of a variable
console.log(typeof score);         // string
console.log(typeof(score));        // string (same result)

// ❓ Convert string to number
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber);        // NaN ➤ because "hitesh" is not a valid number

// ✅ Type Conversion Notes:
// "33"      => 33      ✅ valid
// "33abc"   => NaN     ❌ invalid
// true      => 1
// false     => 0

// ✅ Convert string to boolean
let isLoggedIn = "hitesh";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);    // true

// Boolean Conversion Rules:
// 1       => true
// 0       => false
// ""      => false (empty string)
// "text"  => true (non-empty string)


// ✅ Convert number to string
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);         // "33"
console.log(typeof stringNumber); // string

// *********************** Operations ***********************

let value = 3;
let negValue = -value;             // Unary negative
console.log(negValue);             // -3

// Arithmetic operations
console.log(2 + 2);   // 4
console.log(2 - 2);   // 0
console.log(2 * 2);   // 4
console.log(2 ** 3);  // 8 (Exponentiation)
console.log(2 / 3);   // 0.666...
console.log(2 % 3);   // 2 (Remainder)

// ✅ String Concatenation
let str1 = "hello";
let str2 = " hitesh";
let str3 = str1 + str2;
console.log(str3);    // "hello hitesh"

// ✅ Type Coercion in JS (⚠️ tricky part)
console.log("1" + 2);         // "12"
console.log(1 + "2");         // "12"
console.log("1" + 2 + 2);     // "122" ➤ left to right (string + number = string)
console.log(1 + 2 + "2");     // "32"  ➤ (1+2=3) then 3+"2" = "32"

// ✅ Operator Precedence
console.log((3 + 4) * 5 % 3); // 35 % 3 = 2

// ✅ Special conversions
console.log(+true);  // 1
console.log(+"");    // 0

// ✅ Chained assignment (bad practice, but works)
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1, num2, num3); // 4 4 4

// ✅ Prefix increment
let gameCounter = 100;
++gameCounter;
console.log(gameCounter); // 101

// 🔗 Deep-dive reference (not mandatory, advanced)
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
