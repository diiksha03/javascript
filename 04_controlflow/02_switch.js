// ✅ SWITCH STATEMENT IN JS

// 🔹 Syntax:
/*
switch (key) {
    case value1:
        // code block
        break;

    case value2:
        // code block
        break;

    default:
        // code block if no match found
}
*/

// 🔸 Example:
const month = "march";

switch (month) {
    case "jan":
        console.log("January");
        break;

    case "feb":
        console.log("feb");
        break;

    case "march":
        console.log("march");
        break;

    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

// ✅ Output: march
// Because "march" matched with case "march"
