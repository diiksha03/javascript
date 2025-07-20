class User {

    // Constructor: jab bhi naya object banega, ye auto call hoga
    constructor(email, password) {
        // Setter call hoga yahan (this.email = email → set email(value))
        this.email = email;
        this.password = password;
    }

    // ✅ Getter for email (read karne ke liye)
    get email() {
        // Jab bhi email read hoga, hamesha capital mein milega
        return this._email.toUpperCase();
    }

    // ✅ Setter for email (value set/update karne ke liye)
    set email(value) {
        // Internal variable _email mein store kar rahe hain
        this._email = value;
    }

    // ✅ Getter for password
    get password() {
        // Jab password read karoge, to "hitesh" string add karke return karega
        return `${this._password}hitesh`;
    }

    // ✅ Setter for password
    set password(value) {
        // Internal variable _password mein assign kar rahe hain
        this._password = value;
    }
}

// ✅ Object banaya
const hitesh = new User("h@hitesh.ai", "abc");

// ✅ Email access kiya → getter chalega → uppercase return karega
console.log(hitesh.email);  // Output: H@HITESH.AI
