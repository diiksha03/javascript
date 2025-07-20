const User={
    _email:"face@123",//private property
   _password:"123",



   get email(){
    return this._email.toUpperCase();
   },
   set email(value){
    this._email=value

   }
}
const tea=Object.create(User)
console.log(tea.email);
//	ES5 (2009) use hua tha jab classes nh the 