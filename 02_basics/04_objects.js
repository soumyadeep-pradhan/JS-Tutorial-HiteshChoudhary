// const tinderUser = new Object() // declares a empty object, singleton object
const tinderUser ={} // declares a empty object, non singleton object
// console.log(tinderUser);

tinderUser.id = "65sf"
tinderUser.name = "asdf"
tinderUser.isLoggedin = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullName:{
            firstName : "skiu",
            lastName : "sgg"

        }
    }
}

// console.log(regularUser.fullName.userfullName.lastName);
//optional chaining regularUser.fullName.userfullName?.lastName --API response if else


const obj1 = {
    1: "a",
    2:"b"
}
const obj2 = {
    3: "c",
    4:"d"
}
const obj3 = {
    5: "e",
    6:"f"
}
//if we use same key they will rewrite
// const obj4 = {...obj1, ...obj2, ...obj3}// spread method to merge
// const obj4 = Object.assign(obj1, obj2,obj3)
// obj4["1"] ="p"//if we change obj4 it will reflect in obj1
// console.log(obj4);//obj1 is target obje2 and obj3 are source: obj1 is changed
 
// const obj4 = Object.assign({},obj1, obj2,obj3)//target is empty object
// console.log(obj4);


//when data of users come from database it is in form of array of objects
const users = [
    {
        id:1,
        email:"avs@gsl.com"
    },
    {
        id:1,
        email:"vnv@gsl.com"
    },
]

// console.log(users[1].email);
// console.log(tinderUser);
console.log(Object.keys(tinderUser)); //array of all keys
console.log(Object.values(tinderUser)); //array of all values
console.log(Object.entries(tinderUser)); //array of array of key value pairs

console.log(tinderUser.hasOwnProperty('isLoggedin'));
console.log(tinderUser.Object());