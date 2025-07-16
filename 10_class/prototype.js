class User{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username is ${this.username}`);
        
    }
    static createid(){
        return `123`;
    }

}
const diksha =new User("diksha");
// console.log(diksha.createid());

class Teacher extends User{
    constructor(username,email){
         super(username)    
        this.email=email

    }
}
const iphone=new Teacher("iphone,","iphpn@!233")
console.log(iphone.createid());


