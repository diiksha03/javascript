// ✅ Constructor Function
function User(username, login, islogged) {
    // 🔹 'this' refers to the newly created object (when used with 'new' keyword)
    this.username = username;     // assign passed value to this.username
    this.login = login;           // assign passed value to this.login
    this.islogged = islogged;     // assign passed value to this.islogged

    // 🔸 'return this' is OPTIONAL in constructor
    // JavaScript automatically returns 'this' when called with 'new'
    return this;
}

// ❌ Wrong way (without 'new') — will not create a new object properly, aur purane value ko overwrite kar dega
// const userOne = User("harsh", 12, true);       // ❌
// const usertwo = User("chai and code", 8, false); // ❌
// console.log(userOne);  // Will be undefined or incorrect

// ✅ Correct way — using 'new' keyword
const userOne = new User("harsh", 12, true);            // creates a new object with values
const usertwo = new User("chai and code", 8, false);    // creates another new object

console.log(userOne);
// Output:
// {
//   username: 'harsh',
//   login: 12,
//   islogged: true
// }

console.log(usertwo);
// Output:
// {
//   username: 'chai and code',
//   login: 8,
//   islogged: false
// }

// ✅ Summary (Important Points):
// 1️⃣ 'new' keyword se ek naya empty object create hota hai.
// 2️⃣ Constructor function automatic call hota hai aur 'this' us new object ko refer karta hai.
// 3️⃣ 'this' ke through hum object ke andar properties set karte hain.
// 4️⃣ 'return this' likhna optional hota hai, kyunki 'new' khud return kar deta hai object ko.
// 5️⃣ Agar 'new' na likho to 'this' global object ko refer karega (❌ not recommended).




// this constructor ke andar hamesha us naye object ko refer karta hai jo new keyword se banaya gaya hota hai.
