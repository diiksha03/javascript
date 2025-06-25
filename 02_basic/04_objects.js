// 🔹 Object Creation — Two Ways

// Method 1: Using Object constructor (less used)
const tinderUser = new Object();  

// Method 2: Using object literal (preferred way)
const user = {};  

// Adding properties
user.id = "123abc";
user.name = "Sammy";
user.isLoggedIn = false;

// Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }
console.log("User object:", user);


// 🔹 Nested Objects Example
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hitesh",
            lastname: "Choudhary"
        }
    }
};

// Access nested property
console.log("First Name:", regularUser.fullname.userfullname.firstname);  // Hitesh


// 🔹 Merging Multiple Objects

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

// Method 1: Using Object.assign()
const merged1 = Object.assign({}, obj1, obj2, obj3);
console.log("Merged using Object.assign:", merged1);

// Method 2: Using Spread Operator (Modern way)
const merged2 = { ...obj1, ...obj2, ...obj3 };
console.log("Merged using spread:", merged2);


// 🔹 Array of Objects

const users = [
    { id: 1, email: "a@gmail.com" },
    { id: 2, email: "b@gmail.com" },
    { id: 3, email: "c@gmail.com" }
];

// Access second user's email
console.log("Second user email:", users[1].email);  // b@gmail.com


// 🔹 Object Utilities

console.log("Keys:", Object.keys(user));          // ['id', 'name', 'isLoggedIn']
console.log("Values:", Object.values(user));      // ['123abc', 'Sammy', false]
console.log("Entries:", Object.entries(user));    // [['id','123abc'], ['name','Sammy'], ['isLoggedIn',false]]

// Check if a key exists
console.log("Has isLoggedIn?", user.hasOwnProperty('isLoggedIn')); // true


// 🔹 Object Destructuring

const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
};

// Destructuring + renaming
const { courseInstructor: instructor } = course;
console.log("Instructor:", instructor);  // Hitesh


// 🔹 JSON Format Example (used in APIs)

const apiUserJSON = `
{
    "name": "Hitesh",
    "coursename": "JS in Hindi",
    "price": "free"
}`;

// To convert JSON string to object: JSON.parse(apiUserJSON)
// To convert object to JSON string: JSON.stringify(object)


// 🔹 Array of JSON-like Objects

const apiUsers = [
    { name: "user1", age: 21 },
    { name: "user2", age: 22 },
    { name: "user3", age: 23 }
];

console.log("API User 1:", apiUsers[0].name);  // user1
