const accountid=144553// agar const likha hai toh value change nhi kar skte ek baar declare hone ke baad
let accountemail="diksha@123"
var accountpass="12345"
accountcity="jaipur"

//accountid=2//not allowed u cant change this because it is defind above with const

accountemail="harsh@123"
accountpass="76576"
accountcity="dubai"
let accountstate;

console.log(accountid);
console.table([accountid,accountemail,accountpass,accountcity,accountstate]);

/*
prefer not to use var 
bcoz of issue in block scope and functional scope

*/

