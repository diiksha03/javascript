// ***************  DATES in JavaScript *************************

// ✅ Create current date & time object
let mydate = new Date();

// ✅ .toString()
// ➤ Full date + time in human-readable format
console.log(mydate.toString()); 
// Example: "Mon Jun 24 2025 11:30:45 GMT+0530 (India Standard Time)"

// ✅ .toDateString()
// ➤ Only date part, no time
console.log(mydate.toDateString()); 
// Example: "Mon Jun 24 2025"

// ✅ .toLocaleString()
// ➤ Converts date & time into local language/format
console.log(mydate.toLocaleString()); 
// Example: "24/6/2025, 11:30:45 am"

// ✅ typeof Date object
console.log(typeof mydate); 
// ➤ "object" (Date is a built-in object type)


// ✅ Create a custom date: new Date(year, monthIndex, day, hour, minute)
// ➤ Note: month is 0-based (0 = January, 11 = December)
let creatdate = new Date(2023, 0, 23, 5, 7);
console.log(creatdate.toDateString()); 
// ➤ "Mon Jan 23 2023"


// ✅ Current Date Object
let newdate = new Date();
console.log(newdate); 
// ➤ Full date-time object like: 2025-06-24T...

// ✅ .getMonth()
// ➤ Returns month index (0 = Jan, 11 = Dec)
console.log(newdate.getMonth()); 
// Example: If it's June, this will log 5
