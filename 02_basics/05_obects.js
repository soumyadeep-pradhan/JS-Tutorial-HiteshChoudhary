//destructure of object
//array can also be destuctured
const  course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
// const {courseInstructor}= course  //value extraction from course object in rhs, which value to extract in the lhs inside curly braces
// console.log(courseInstructor);//hitesh
const {courseInstructor: instructor}= course  // instructor in short
console.log(instructor);//hitesh

// const navbar=(props.company) =>{

// }
// const navbar=({company}) =>{

// }//react not required now

// navbar(company = "hitesh")

/*API - how you write values came from backend
earlier values came in xml structure which was complex
now - json :this is essentially an object

*/
//object without name
// {
//     "name": "hitesh",
//     "coursenamee": "js in hindi",
//     "price": "free" 
// }// in json keys and value both should be written in string("name", "coursename"..)instead of without ""
//https://api.github.com/users/hiteshchoudhary

//sometimes api in array format
[
    {},
    {},
    {}
]

//randomuser me api
//json formatter to study
