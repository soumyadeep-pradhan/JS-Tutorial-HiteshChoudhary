//let score = "3n4"//not a number NaN but its type is number
// let score = null //0 
let score =undefined
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);
/* "33"->33
"33av"->NaN
true->1 false->0
*/
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

/* 
1=>true 0=>false
""=>false
"sac"=>true
*/
/*--------Operation------ */
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Soumyadeep"
let str3 = str1 +str2
// console.log(str3);

// console.log(1+"2"); 
// console.log("2"+1+2); 122 if string is in start everything is converted to string
// console.log(1+2+"2"); 32 if string is in last first  conversion then string

console.log(+true);//1
//console.log(true+);//
// console.log(+"");
let num1,num2,num3;
num1=num2=num3=2+2
console.log(num3);

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
