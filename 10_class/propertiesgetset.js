
// Yeh syntax (Object.defineProperty) tab use hota tha jab class keyword JavaScript mein nahi aaya tha (ES6 ke pehle).
function User(email,password){
    this._email=email;
        this._password=password;

        Object.defineProperty(this,"email",{
            get:function(){
                return this._email.toUpperCase();
            },
            set:function(value){
                this._email=value;
            }
        })
         Object.defineProperty(this,"password",{
            get:function(){
                return this._password.toUpperCase();
            },
            set:function(value){
                this._password=value;
            }
        })


}
const chai=new User("diksha@123.com", "heelo")
console.log(chai.password);
console.log(chai.email);

