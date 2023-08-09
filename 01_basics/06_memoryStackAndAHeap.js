//stack(primitive) heap(non primitive)

let myYoutubename="abcdotcom"
let anotherName = myYoutubename
anotherName ="defdotcom"
console.log(anotherName);
console.log(myYoutubename);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo =userOne
userTwo.email= "qwe@gammil.com"
console.log(userOne.email);
console.log(userTwo.email);