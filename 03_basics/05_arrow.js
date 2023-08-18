const user={
    username: "soumya",
    price: 999,
    welcomeMessage: function () {
            console.log(`${this.username} welcome to website`);
            //value of username in current context
            console.log(this);
    }
}
// user.welcomeMessage()
// user.username="asd"
// user.welcomeMessage()
// console.log(this);//{}in node environment refers to empty object
//current context empty
// in browser global object is window

// function chai() {
//     // let username ="so"
//     //     console.log(this.username);//undefined we cant use 'this' in the function
//      console.log(this);//when this is print inside funtion in node environment we get global, microtask....
// }
// chai();

// const chai = function(){
//     let username = "hjl"
//     console.log(this.username);
// }
// chai() //undefined


// const chai = ()=> {
//     let username = "ffg"
//     console.log(this.username);//undefined
//     console.log(this);//{}
// }
// chai()


// const addTwo=(num1,num2)=>{
//     return num1+ num2 //explicit return
// }
//for curly braces return keyword is must
// const addTwo = (num1 , num2) =>  num1+num2//implicit return
//for paranthesis return not required
// const addTwo = (num1 , num2) =>  (num1+num2)//implicit return
// console.log(addTwo(3,4));
// const addTwo = (num1, num2) =>{username:"sou"}//undefined
// const addTwo = (num1, num2) =>({username:"sou"})//it has to rap under paranthesis

const myArray = [2,3,5,6]
// myArray.forEach(()=>())
// myArray.forEach(()=>{})
    
