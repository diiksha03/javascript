// ✅ Constructor Function: Used to create multiple user objects with same structure
function User(username, score) {
  // 'this' refers to the new object that will be created
  this.username = username;
  this.score = score;
}

// ✅ Adding method to prototype so all objects created by User can access it
User.prototype.printme = function () {
  // 'this' refers to the object which called the method (e.g., chai or tea)
  console.log(`${this.username}'s score is ${this.score}`);
};

// ❌ Galat Way (without new):
// const chai = User("chai", 25);
// Explanation: Yahan 'new' use nahi hua, isliye 'this' global object ko refer karega
//              aur 'chai' me undefined assign ho jaayega. Output nahi milega.

// ✅ Sahi Tarika (with new):
const chai = new User("chai", 25); // new keyword se ek naya object create hoga
const tea = new User("tea", 67);   // aur prototype bhi link ho jaayega

// ✅ Calling method defined in prototype
chai.printme(); // Output: chai's score is 25
tea.printme();  // Output: tea's score is 67

// ✅ Summary Notes:
/*
1. 'new' keyword se:
   - ek naya object create hota hai
   - constructor function call hota hai
   - 'this' us naye object ko refer karta hai
   - prototype methods bhi attach ho jaate hain

2. Constructor function ka naam capital se start karna best practice hota hai.

3. Prototype mein method define karne se memory efficient hota hai (ek hi method sab objects use karte hain)
*/


//User.prototype.printme aur ye js khud prototype ko dhund letahai toh tumhe .prototype likhn eke jaruart nhi hai bas smjhn eke liye hai


//@@@@@@@@@@@@@@@@@@@@@@@    higher level  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2