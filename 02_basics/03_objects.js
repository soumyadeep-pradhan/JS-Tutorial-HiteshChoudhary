//singleton--made by constructor
//not singleton-- made by literal


// singleton 
// Object.create

//object literals


const mySym = Symbol("Key1")//sue symbol as key
const JsUser = {
    name : "soumya", ///name is like string "name"
    "Full name": "Soumyadeep Pradhan",
    [mySym] : "myKey1",
    age : 18,
    location : "india",
    email : "abc@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}

//two ways to access
// console.log(JsUser.email);
// console.log(JsUser["email"]);//email should be treated as string
// console.log(JsUser["Full name"]);//camt be accessed using dot

 // console.log(JsUser[mySym]);//string
// console.log(typeof mySym);//symbol
/**if use this
  mySym = "Mykey1" it is used string it is not used as symbol
  console.log(typeof JsUser.mysym) --string
  to declere it as symbol we have to use [mysym]="mykey1*/

//   JsUser.email = "abc@def.com" //change the value
//   console.log(JsUser["email"]);

//to freeze the object

// Object.freeze(JsUser)
// JsUser.email = "ghi@iit.ac.in"
// console.log(JsUser);

JsUser.greeting =function(){
    console.log("Hello JS user");

}
JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// JsUser.greeting()
// console.log(JsUser.greeting);//[Function (anonymous)]
// console.log(JsUser.greeting());// Hello JS user undefined

console.log(JsUser.greeting2());