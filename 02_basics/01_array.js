//ARRAY
  
const myArr =[0,1,2,3,4,5]//can be string,number, etc. element can be different type
// console.log(myArr[0]);
//swallow copy--share same reference, change in original arra
//deep copy -- dont share same reference
const myHeor = ['abac','dfds']
// console.log(myHeor);

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[2]);

//Array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)//shift all values load on computer
// myArr.shift()//removes 9
// console.log(myArr.includes(8));//true or false
// console.log(myArr.indexOf(88));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice, splice
console.log("A ",myArr);
const myn1 =myArr.slice(1,3)//A  [ 0, 1, 2, 3, 4, 5 ]
console.log(myn1);//[ 1, 2 ]
console.log("B  ",myArr);//B   [ 0, 1, 2, 3, 4, 5 ]
const myn2 =myArr.splice(1,3)
console.log(myn2);//[ 1, 2, 3 ]
console.log("C  ",myArr);//C   [ 0, 4, 5 ] original array change
