const name = "soumyadeep"
const repoCount = 50
//console.log(name+repoCount+ " Value"); outdated
// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);//modern way--> string interpolation
const gameName = new String('abcd-efgh-ijkl') //string is object 
console.log(gameName[1]);
// console.log(gameName.__proto__);//object empty

// console.log(gameName.length);
// console.log(gameName.toUpperCase());//original string is not changed
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('f'));
const newString = gameName.substring(0,4)//cant give -ve values
// console.log(newString);

const anotherString =  gameName.slice(-8,6) //can give -ve values also
// console.log(anotherString);

const newStringOne ="   Soumya    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://abc.com/soumyadeep%20Pradhan"
// console.log(url.replace("%20",' '))
// console.log(url.includes('abc'));//true


console.log(gameName.split('-'))//gives an array 

