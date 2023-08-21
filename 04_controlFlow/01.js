// if
const isUserLoggedIn = true
if (2 === "2") {
    console.log("executed");
}
//=== type checking
// <, > , <=, >=, ==, ====, !==

const temperature = 41
if (temperature < 50) {
    console.log("temperature is less than 50");
}else{
    console.log("temperature is greater thsn 50");
}
const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`user power : ${power}`);
}
// console.log(`user power: ${power}`);//scope problem
// console.log(`user power: ${power}`);//if  power is made var it wil be available out of scope

const balance = 1000
if (balance > 500) console.log("test" ),
console.log("test2");//not good practice

if (balance < 500) {
    console.log("less than 500");
}else if(balance < 750) {
    console.log("less than 750");
}
else if(balance < 900) {
    console.log("less than 900");
}else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle =false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3 ) {
    console.log("Allow to buy");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user Logged In");
}