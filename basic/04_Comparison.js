// ⚠️ Try to avoid these types of comparisons — they often lead to confusion

console.log(null > 0);       // false
console.log(null == 0);      // false
console.log(null >= 0);      // true (confusing!)

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
