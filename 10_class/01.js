// ✅ Object Literal: Simple way to define objects using curly braces {}
// Object Literal JavaScript mein ek simple and direct way hai object banane ka — bina kisi class ya constructor ke.

const user = {
    // 🔹 Properties of the object:
    username: "diksha",      // string property
    login: 5,                // number property
    signedin: true,          // boolean property

    // 🔹 Method inside object
    getuserDetails: function() {
        console.log("got user details");

        // 🔸 this.username => refers to the username property of this object
        console.log(this.username);   // Output: diksha

        // 🔸 this => refers to the whole 'user' object because we're inside its method
        console.log(this);            // Output: complete 'user' object
    }
};

// ✅ Accessing object properties using dot notation
console.log(user.username);   // Output: diksha

// ✅ Calling the method (commented out for now, uncomment to test)
// user.getuserDetails();     

// ✅ Global 'this'
// Outside of any object or function, 'this' refers to the global object
console.log(this); // In browser => window object; In Node.js => global object



