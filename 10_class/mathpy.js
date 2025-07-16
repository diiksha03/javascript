// ✅ Example: Understanding Property Descriptors in JavaScript

const chai = {
    name: "masala-tea",
    price: 20,
    ispresent: true
};

// 📌 Definition:
// Property Descriptor = JavaScript mein object property ke peeche ka metadata
// Yeh batata hai ki property kaise behave karegi:
// 1. kya usse change kar sakte hain? (writable)
// 2. kya wo loop mein dikhegi? (enumerable)
// 3. kya usse delete/redefine kar sakte hain? (configurable)

//  Property descriptors dekhne ke liye:
// 🔍 Step 1: Check descriptor of "name"
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

/* ✅ Output:
{
  value: 'masala-tea',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// 🧠 Matlab: Abhi "name" ko hum change bhi kar sakte hain, loop mein bhi dikh raha hai, aur delete bhi kar sakte hain


// 🔧 Step 2: Uncomment this to freeze the property (abhi comment hai)
/*
Object.defineProperty(chai, "name", {
    writable: false,      // ❌ can't change
    enumerable: false,    // ❌ won't appear in loop
    configurable: false   // ❌ can't delete or redefine
});
*/

// 🔍 Step 3: Loop through the object
for (let key in chai) {
    console.log(key);  // agar enumerable false hota to "name" yahan nahi dikhta
}

// 🔄 Step 4: Try changing the name
chai.name = "greentea";
console.log(chai.name);  // agar writable false hota, toh value nahi badalti

/* ✅ Agar defineProperty uncomment hota, output hota:
for loop: price, ispresent
name change: still "masala-tea" (not "greentea")
*/

// 📘 Summary Notes:

// ✳️ writable: false → value can't be changed
// ✳️ enumerable: false → property hidden in for...in loop / Object.keys()
// ✳️ configurable: false → can't delete or redefine the property

// 🧠 Default behavior (jab hum normal object banate hain):
// writable: true
// enumerable: true
// configurable: true
