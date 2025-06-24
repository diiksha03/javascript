let score= null
console.log(typeof score);// 1 method
console.log(typeof(score));//2 method

let valueInNumber=Number(score)//conversion of string into number
console.log(typeof valueInNumber);//
console.log(valueInNumber);

//THINGS TO OBSERVE HERE:
//"33"=> 33 number convert ho gya number mei

//"33abc"=> NaN
//true=>1, false=>0


let isLogged="hitesh"
let booleanislogged=Boolean(isLogged)
console.log(booleanislogged);

//THINGS TO OBSERVE HERE:
//1=>true;0=> false
//""=>false
//"diksha"=> true

let someno=33
let stringinnumber=String(someno)
console.log(stringinnumber);
console.log(typeof stringinnumber);




/*1. typeof Operator

Variable ka data type batata hai
Syntax: typeof value ya typeof(value)
Note: typeof null = "object" (JavaScript ka bug)


2. Number(value) – String/Boolean ko Number banata hai

"33" → 33
"33abc" → NaN
true → 1
false → 0
null → 0


3. Boolean(value) – True/False banata hai
1, "text", " " → true
0, "", null, undefined → false


4. String(value) – Value ko String banata hai
33 → "33"
true → "true"
null → "null"

*/

//***************** OPERATIONS *********** */
// 🔹 Unary Operator (Negative)
let value = 3;
let negvalue = -value;              // -value → sign ulta ho gaya
console.log(negvalue);              // Output: -3

// 🔹 String Concatenation

let str1 = "hello";
let str2 = "radheyradhey";
let str3 = str1 + str2;             // dono strings jod gayi
console.log(str3);                  // Output: helloradheyradhey


// 🔹 Type Coercion Examples (mix of string + number)

console.log("1" + 2);               // Output: "12"
// string + number → string

console.log(1 + "2");               // Output: "12"
// number + string → string

console.log("1" + 2 + 2);           // Output: "122"

// left to right: "1"+2 = "12", then "12"+2 = "122"   suru mei string to sabko string kar do

console.log(1 + 2 + "2");           // Output: "32" baad mei string to phle addition phir string

// 1+2 = 3, then 3 + "2" = "32" (number + string → string)


// Arithmetic Operators → Math operations
// + Add, - Subtract, * Multiply, / Divide, % Remainder

// Assignment Operators → Value assign karna
// = Assign, += Add & assign, -= Subtract & assign, *= Multiply & assign

// Comparison Operators → Compare values
// == Equal (value only), === Strict equal (value + type), != Not equal, >, <, >=, <=

// Logical Operators → Conditions ke liye
// && AND (dono true), || OR (koi ek true), ! NOT (ulta)

// Ternary Operator → Short if-else
// condition ? value_if_true : value_if_false
// Example: age >= 18 ? "Adult" : "Minor"

// typeof Operator → Data type check karne ke liye
// Example: typeof "hello" → "string", typeof 5 → "number"

// Type Coercion (String + Number) → Left to right execute hota hai
// "1" + 2 → "12" (string), 1 + 2 + "3" → "33" (first number add, then string)



//post and pre increment

let x = 5;

console.log(x++);  // Output: 5  
// Post-increment: Pehle x ki current value print hoti hai (5), fir x = 6 ho jaata hai

console.log(++x);  // Output: 7  
// Pre-increment: Pehle x = x + 1 (6 → 7), fir new value print hoti hai (7)

