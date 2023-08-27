//reduce
//used in cart 

const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc,cur){
//     console.log(`acc: ${acc} and curr: ${cur}`);
//     return acc+ cur
// },3)

// console.log(myTotal);
/*acc: 3 and curr: 1
acc: 4 and curr: 2
acc: 6 and curr: 3
9*/

const myTotal1 = myNums.reduce( (acc,cur)=>acc+cur,4 )
// console.log(myTotal1);//10


const shoppingCart =[

    {
        itemName:"js course",
        price: 999
    },
    {
        itemName:"java course",
        price: 2999
    },
    {
        itemName:"mobile dev course",
        price: 3999
    },
    {
        itemName:"Data sccience course",
        price: 1999
    },
]


const pricecToPay = shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(pricecToPay);