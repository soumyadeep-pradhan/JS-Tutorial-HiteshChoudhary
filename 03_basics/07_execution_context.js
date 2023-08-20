//JavaScript Execution Context
// {} --> Global Execution Context
// JS is single Threaded , everything in it is a process
//for browser Global ec  is window for node it is different
//Function Execution context
//Eval Execution Context



// let val1 = 10;
// let val2 = 5;
// function addnum(num1, num2) {
//     let total = num1+num2
//     return total
// }
// let result1  =addnum(val1, val2)
// let result2  =addnum(10,2)
/**
1. global Execution //this is located
2.memory creation phase
    val1 = undefined
    val2 = undefined
    addnum= definition
    result1 = undefined
    result2 = undefined
3.Execution phase
    val1 = 10
    val1 = 5
    addNum-->creates another new execution context new box
            /*
            new variable environment + execution thread
            memory creation phase and execution phase will again take place for addNum
            it is created for definition not in result1
            **memory phase**
                val1 = undefined
                val2 = undefined
                total = undefined
           `**execution context***
                num1  = 10
                num2 = 5
                total = 15  
            total return in the global execution context 
            after completion new execution context is deleted
            **/
        // for result2 same repetition of new env th
        // call stack LIFO

/* run in browser in source snippet ,add check ,save call stack 
function one(){
console.log("one")
}
function two(){
console.log("twowo")
}
function three(){
console.log("three")
}
one()
two()
three()
 */



