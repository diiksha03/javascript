let score= null
console.log(typeof score);// 1 method
console.log(typeof(score));//2 method

let valueInNumber=Number(score)//conversion of string into number
console.log(typeof valueInNumber);//
console.log(valueInNumber);

//THINGS TO OBSERVE HERE:
//"33"=> 33 number convert ho gya number mei

//"33abc"=> NaN
//true=>1, false=>0


let isLogged="hitesh"
let booleanislogged=Boolean(isLogged)
console.log(booleanislogged);

//THINGS TO OBSERVE HERE:
//1=>true;0=> false
//""=>false
//"diksha"=> true

let someno=33
let stringinnumber=String(someno)
console.log(stringinnumber);
console.log(typeof stringinnumber);




/*1. typeof Operator

Variable ka data type batata hai
Syntax: typeof value ya typeof(value)
Note: typeof null = "object" (JavaScript ka bug)


2. Number(value) – String/Boolean ko Number banata hai

"33" → 33
"33abc" → NaN
true → 1
false → 0
null → 0


3. Boolean(value) – True/False banata hai
1, "text", " " → true
0, "", null, undefined → false


4. String(value) – Value ko String banata hai
33 → "33"
true → "true"
null → "null"

*/

