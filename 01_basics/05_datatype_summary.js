/*Primitive & NOn-Primitive*/
//Primitive:call by value 7 types=> String, Number, Boolean, null, undefined, symbol, BigInt
//Reference (Non Primitive) : Array, Objectsm, Functions
//JS dynamically types
const score = 40
const scoreValue =100.3 //decimal has no special , no float,int. any number is number
const isLoggedIn =false
const outsideTemp = null // it is empty, it is not 0
let userEmail;//undefined
const id =Symbol('123')
const anotherID = Symbol('123')//false
// console.log(id === anotherID);
const bigNumber = 1864624664641n
// console.log(typeof bigNumber);
const heros = ["shaktiman","naaraj", "doga"]//arary

let myObj ={
    name:"Soumyadeep",
    age:21,
}//object within curly braces{}

//funtion can be stored in variable
const myfunction = function(){
    console.log("hello World");
}
// console.log(typeof outsideTemp);//object
// console.log(typeof userEmail);//object
console.log(typeof myfunction);//function or obejctfuntion 
/*
type of val         Result
undefined           undefined
null                object
 */
