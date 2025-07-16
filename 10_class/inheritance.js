class user{
    constructor(username){
        this.username=username

    }
    logme(){
        console.log(`username is ${this.username}`)
    }
}

class Teacher extends user{

    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password
    }
    addcourse(){
        console.log(`new course was added by ${this.username}`);
        
    }
}
const chai=new Teacher("chai","chai@",123);
chai.addcourse();
chai.logme();

const masalatea=new user("masalachai");
masalatea.logme();
masalatea.addcourse();
