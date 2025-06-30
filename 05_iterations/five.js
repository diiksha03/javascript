// ✅ JavaScript forEach Loop — With Full Notes

const coding = ["js", "ruby", "java", "python", "cpp"];

// ✅ 1. Basic forEach using anonymous function
// forEach is used to loop through arrays and access each item
coding.forEach(function (val) {
    console.log(val); // prints each item one by one
});

// ✅ 2. Using arrow function inside forEach
coding.forEach((item) => {
    console.log(item); // same as above, cleaner syntax
});

// ✅ 3. Passing a separate function to forEach
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe); // will call printMe for each item in array

// ✅ 4. forEach gives access to item, index, and full array
coding.forEach((item, index, arr) => {
    console.log(item, index, arr); 
    // item: current value
    // index: current index
    // arr: full array
});



// ✅ 5. forEach with array of objects

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
];

// Accessing object properties inside forEach
myCoding.forEach((item) => {
    console.log(item.languageName); // prints: javascript, java, python
    // You can also use: item.languageFileName
});



// 🧠 Quick Notes:

// 🔹 forEach is a method available on arrays
// 🔹 It does not return anything (undefined)
// 🔹 You can access:
//    - item (value)
//    - index
//    - array itself

// 🔹 Best use: when you just want to perform an action for each item
// 🔹 Not useful when you want to return a new array (use map/filter in that case)

// ✅ Syntax:
// array.forEach((value, index, array) => {
//     // your code here
// });
