const uesrEmail = ""
// if it was empty string it was false
// for empty array it was true
if (uesrEmail) {//no comparison it is assumed string is true value
    console.log("Got user email");          
} else {
   console.log("Dont have user email"); 
}

// falsy values 
// false, 0, -0, BigInt 0n, null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function (){}

// array check
if(uesrEmail.length == 0){
    console.log("Array is empty");
}
const emptyObj ={}

if (Object.keys(emptyObj).length == 0) {
    console.log("Object is empty");
}
//Object.keys(emptyObj) => array and using .length we can get length

console.log(false ==0);//true
console.log(false =="");//true
console.log(0 =='');//true


// Nullish coalescing Operator (??): null undefined

let val1 ;
// val1 = 5 ?? 10
// console.log(val1);//5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15 //15
// database call firebase directly dont get response 2 values

val1  = null ?? 10 ?? 5 // 10
console.log(val1);


// ternary operator
// condtion ? true : false

const iceTeaPrice= 100
iceTeaPrice <= 80? console.log("less than 80 "): console.log("more than  80");