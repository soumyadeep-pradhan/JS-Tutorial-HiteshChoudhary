//for each

const coding = ["js","ruby","java","python","cpp"]
// //call back -->no name parameter-->val
// coding.forEach( function (val){
//     console.log(val);
//  })

coding.forEach( (item)=>{
    // console.log(item);
})

function printMe(item){
    console.log(item)
}
// coding.forEach(printMe)//only reference dont use it printMe()

coding.forEach( (item, index, arr)=>{
    // console.log(item,index,arr);
})

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName:"js"
    },
    {
        languageName: "Java",
        languageFileName:"java"
    },
    {
        languageName: "python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})