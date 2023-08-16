//ekart add

// function calculateCartPrice(num1){
//     return num1

// }
// console.log(calculateCartPrice(200,300,400));//200
function calculateCartPrice(...num1){
    // here ... is rest operator
    return num1

}
// console.log(calculateCartPrice(200,300,400));//[ 200, 300, 400 ] array
function calculateCartPrice(val1, val2, ...num1){
    // here ... is rest operator
    return num1

}
// console.log(calculateCartPrice(200,300,400,500,600));//[ 400, 500, 600 ]

const user = {
    username: "soumya",
    price:  999
}

function hadleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
hadleObject(user)
hadleObject({
    username:"aff",
    price:233
})


const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1,2,3,4]));