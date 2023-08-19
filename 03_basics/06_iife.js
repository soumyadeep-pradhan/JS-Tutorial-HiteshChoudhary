//Immediately Invoked Function Expressions (IIFE)

// (function chai(){
//     console.log("DB CONNECTED");
// })()
// //sometimes global scope pollution creates problem

// // 1st ()--> function definition
// // 2nd() --> execution call

//arrow function
( ()=>{
    console.log("DB connected 2");
} )();
//immediately invoked function doesnt know where to stop execution
// we have to end the line with semicolon;
(
    function chai(){
        //named IIFE
        console.log("DB CONNECTED3");
    }
)();
( (name)=>{
    //simple IIFE or unnamed IIFE
    console.log(`DB connected 2 ${name}`);
} )("soumyadeep");
