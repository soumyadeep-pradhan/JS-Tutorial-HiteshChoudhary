const arr1 = ["delta","gamma","alpha"]
const arr2 = ["math","Physics","chemistry"]
// arr1.push(arr2)
// console.log(arr1);//arr2 is added as single element
// console.log(arr1[3][1]);
// const arr3 = arr1.concat(arr2)//in new array
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);//[ 'delta', 'gamma', 'alpha', 'math', 'Physics', 'chemistry' ]

// const allArr = [...arr1, ...arr2]
// console.log(allArr);//spread operator

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array =another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Soumyadeep"));
// console.log(Array.from("Soumyadeep"));
// console.log(Array.from({name:"soumyadeep"}));//interesting have to mention explicitely array is made from key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
