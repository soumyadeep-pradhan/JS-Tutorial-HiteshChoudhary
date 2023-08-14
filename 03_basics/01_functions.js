


function sayMyName(){
    console.log("H");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
}

// sayMyName()

// function addTwoumbers(number1, number2){
//     console.log(number1+number2);
// }
// const result =addTwoumbers(4,5)
// console.log(result);//undefined, console does not mean it is returning that value

// addTwoumbers(4, "a")//4a
// addTwoumbers(4, null)//4
// addTwoumbers(4, 6)//10


function addTwoumbers(number1, number2){
//  let result = number1+number2
//  return result
//  console.log("adf");//unreachable code
return number1+number2
}

const result =addTwoumbers(4,5)
// console.log(result);

function loginUserMessage(username){
    if(username === undefined){// valid when situation is evaluated in true
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("soumya"));//soumya just logged in
// console.log(loginUserMessage(""));// just logged in
// console.log(loginUserMessage());// undefined
//"",undefined--> empty string, undefined are considered to be flase
//hence it will not enter into IF so we use ! to make it opposite
// like if(!username)
// function loginUserMessage(username){
//     if(!username){// valid when situation is evaluated in true
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());// undefined

// or we can give some default value also

function loginUserMessage(username="soumya"){
    if(!username){// valid when situation is evaluated in true
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());// soumya just logged in
console.log(loginUserMessage("als"));// soumya just logged in