//closure
function one(){
    const userrname ="soumya"
    //function insde another function
    function two(){
        const website = "youtube"
        console.log(userrname);
    }
    // console.log(website);
    // two() if two is comment out two will not run
}//child function can access the parent variables
// one()//one is comment out nothing will execute

if (true) {
    const userrname1 = "soumya"
    if (userrname1=="soumya") {
        const website1 = " youtube"
        // console.log(userrname1+website1);
    }
    // console.log(website1);
}
// console.log(userrname1);


//+++++++++interesting++++++++++++


console.log(addone(4));//if it is put before it  does not give error
function addone(num) {
        return num+1
}

const addTwo = function(num) {
    return num+2
}
addTwo(2)//if this line is put before function declaration it gives error
console.log(addTwo(3));//5