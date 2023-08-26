//map
const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums1 = myNumbers.map( (num)=>num+10)
// console.log(newNums1);
const newNums2 = myNumbers.map( (num)=>{return num+10})
// console.log(newNums2);

//chaining
// result pass on to the next chain
const newNums3 = myNumbers
                .map((nums)=>nums*10)
                .map((nums)=>nums+1)//[11, 21, 31, 41,51,61, 71, 81, 91, 101]
                .filter((nums)=>nums>=40)
console.log(newNums3);