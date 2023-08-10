const score = 400 //automatically number is defined
// console.log(score);
const balance = new Number(100)//explicitely defined as number
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));//used in ecommerce application

//priority is given to before decimal
const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));//124
const otherNumber1 = 1123.8966
// console.log(otherNumber1.toPrecision(3));//1.12e+3
const otherNumber2 = 23.8966
// console.log(otherNumber2.toPrecision(3));//23.9

const hundreds = 10000000
// console.log(hundreds.toLocaleString());//us standard
// console.log(hundreds.toLocaleString('en-IN'));//indian  standard
/*number datatype 
 in browser for DSA 
 minvalue maxvalue*/

 //++++++++++++++ Maths ++++++++++++++++++

// console.log(Math);//object  go to browser for more function
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6));
// console.log(Math.min(4,6,-2,-6));
// console.log(Math.max(4,6,-2,-6));

console.log(Math.random());//between 0 and 1
console.log(Math.random()*10);//between 0 and 10
console.log((Math.random()*10)+1);//between 1 and 10
console.log((Math.floor(Math.random()*10)+1));//between 1 and 10

const min = 10
const max = 20
Math.random()*(max-min+1)+min
console.log(Math.floor((Math.random()*(max-min+1)))+min);
