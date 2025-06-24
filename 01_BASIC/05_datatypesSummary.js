 ///JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.
 
 // Primitive Data Types – Immutable, compared by value, stored in stack

 // 1. String
let name = "Diksha"; // Textual data
console.log(typeof name); // "string"

// 2. Number
let age = 21;
let pi = 3.14;
let notANumber = NaN; // Special number type
console.log(typeof age); // "number"

// 3. Boolean
let isLoggedIn = true; // true or false values
console.log(typeof isLoggedIn); // "boolean"

// 4. Undefined
let x;
console.log(typeof x); // "undefined" → variable declared but no value

// 5. Null
let empty = null;
console.log(typeof empty); // "object" ❗(JavaScript bug)

// 6. Symbol (ES6+)
let id = Symbol('123');
console.log(typeof id); // "symbol" → unique values (mostly in advanced JS)

// 7. BigInt (ES2020+)
let bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber); // "bigint" → for large numbers beyond Number limit




 //Non-Primitive Data Types – Mutable, compared by reference, stored in heap

 // 1. Object
let person = { name: "Diksha", age: 21 }; // Key-value pair collection
console.log(typeof person); // "object"

// 2. Array
let scores = [95, 85, 75]; // Ordered list
console.log(typeof scores); // "object" → arrays are special kind of objects

// 3. Function
function greet() {
  return "Hello!";
}
console.log(typeof greet); // "function" → special type of object

// 4. Other types: Date, Map, Set, RegExp → all are objects
let today = new Date();
console.log(typeof today); // "object"





//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//Stack Memory(Primtive) =>variable ka  copy milta hai isme ,
// Heap(Non -Primitive)=>originla value mie change hota hai
let myyt="diksha.com"
let anothername= myyt
anothername="hello";
console.log(myyt);
console.log(anothername);//orignal code is still same because the chnges happening in copy version



let user={
  email:"siksha@123",
  upi:"hgsktqw"

}
let user2=user
user2.email="hello@123"
console.log(user);
console.log(user2);
// notice karo orignal email mie bhi chnage ho gya








