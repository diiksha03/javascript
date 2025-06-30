// ✅ forEach vs filter in JavaScript — Full Notes & Examples

// const coding = ["js", "ruby", "java", "python", "cpp"]

// ❌ forEach doesn't return anything (it always returns undefined)
const values = coding.forEach((item) => {
    return item;  // this return doesn't affect anything
});
console.log(values); // Output: undefined

// ✅ Use forEach when you just want to perform an action (like print, push)

// --------------------------------------------------

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ✅ filter returns a new array containing only the elements that match the condition

const newNums = myNums.filter((num) => {
    return num > 4; // keeps only numbers greater than 4
});
console.log(newNums); // [5, 6, 7, 8, 9, 10]

// ✅ Same logic using forEach and manual push
const newNums2 = [];
myNums.forEach((num) => {
    if (num > 4) {
        newNums2.push(num); // manually pushing matching values
    }
});
console.log(newNums2); // [5, 6, 7, 8, 9, 10]

// ✅ Preferred: use filter when creating new arrays based on condition

// --------------------------------------------------

// 📚 Filtering Complex Data (Array of Objects)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// ✅ Filter books with genre = 'History'
let userBooks = books.filter((bk) => bk.genre === 'History');
console.log(userBooks);

// ✅ Filter books where genre = 'History' AND published after 1995
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks); // Only books matching both conditions

// --------------------------------------------------

// 🧠 Summary Notes:

// 🔹 forEach:
// - Loops through each item in array
// - Does not return anything (undefined)
// - Use when you're just performing an action (e.g., printing, pushing, updating)

// 🔹 filter:
// - Returns a new array
// - Only includes items where the condition returns true
// - Perfect for filtering data based on criteria

// ✅ Use Case Examples:
// - Get users above age 18 ➝ use filter
// - Print each student's name ➝ use forEach
