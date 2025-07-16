class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptpassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }

}
const chai =new User("chai","chai@gmail.com",'123')
console.log(chai.encryptpassword());
console.log(chai.changeusername());

///behind the sceen
