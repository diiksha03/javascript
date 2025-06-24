// ✅ Template Literal - for string interpolation using backticks and ${}

// + se concat karna is old use backticks

const name = "diksha";
const numbercount = 50;
console.log(`this is my sweet ${name} and my repocount is ${numbercount}`);

// ✅ Creating a string using the String constructor
const gamename = new String('radheyradhey');

// ✅ .__proto__ shows all the string methods available
console.log(gamename.__proto__);

// ✅ .length - gives total number of characters in the string
console.log(gamename.length); // ➤ 12

// ✅ .charAt(index) - returns character at the specified index
console.log(gamename.charAt(3)); // ➤ 'h'

// ✅ .toUpperCase() - converts entire string to uppercase
console.log(gamename.toUpperCase()); // ➤ 'RADHEYRADHEY'

// ✅ .indexOf("char") - gives the index of first occurrence of character
console.log(gamename.indexOf("h")); // ➤ 3

// ✅ .substring(start, end) - extracts string from start to before end index (no negatives)
const newstring = gamename.substring(0, 7);
console.log(newstring); // ➤ 'radheyr'

// ✅ .slice(start, end) - extracts part of string, supports negative index
const anotherString = gamename.slice(-8, 5);
console.log(anotherString); // ➤ '' (since -8 is before 5, nothing returns)

// ✅ .trim() - removes leading and trailing whitespaces (not in between)
const news1 = "    dikshaa    ";
console.log(news1); // with spaces
console.log(news1.trim()); // ➤ 'dikshaa'

// ✅ .replace("old", "new") - replaces the first occurrence of a substring
const url = "httpuwtudwqguywi@78$diksha";
console.log(url.replace("@", "__")); // ➤ replaces @ with __


console.log(title.startsWith("Hello")); // ➤ true
console.log(title.endsWith("sha"));     // ➤ true

// 🔥 EXTRA USEFUL STRING METHODS (MUST KNOW)

// ✅ .includes("text")
// ➤ Checks if the given text exists in the string (case-sensitive)
console.log("Diksha".includes("sha"));       // true

// ✅ .startsWith("text")
// ➤ Returns true if string starts with the given text
console.log("Diksha".startsWith("Di"));      // true

// ✅ .endsWith("text")
// ➤ Returns true if string ends with the given text
console.log("Diksha".endsWith("sha"));       // true

// ✅ .replaceAll("old", "new")
// ➤ Replaces all occurrences of a substring (unlike .replace which only replaces first match)
console.log("radhe radhe".replaceAll("radhe", "shyam")); // "shyam shyam"

// ✅ .split("separator")
// ➤ Splits the string into an array using the given separator
const fruits = "Apple,Banana".split(",");
console.log(fruits);                         // ['Apple', 'Banana']

// ✅ .repeat(n)
// ➤ Repeats the string n times
console.log("wow".repeat(3));                // "wowwowwow"

// ✅ .toLowerCase()
// ➤ Converts entire string to lowercase
console.log("HELLO".toLowerCase());          // "hello"

// ✅ .concat("other")
// ➤ Joins/concatenates strings (rarely used; `+` or backticks preferred now)
const str1 = "Radhe";
const str2 = "Shyam";
console.log(str1.concat(" ", str2));         // "Radhe Shyam"

