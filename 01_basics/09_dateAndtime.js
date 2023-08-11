let myDate = new Date()
// console.log(myDate);
// console.log(typeof myDate);//ohbject
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());//Mon Jan 23 2023

// let myCreatedDate1 = new Date(2023, 0, 23 , 5, 3)
// console.log(myCreatedDate1.toLocaleString());

// let myCreatedDate2 = new Date("2023-01-14")
// console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("01-14-2023")
// console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate3.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

newDate.toLocaleString("default",{
    weekday: "long",

})//interesting