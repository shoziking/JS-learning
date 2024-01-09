

function sayMyName(){
console.log("s");
console.log("h");
console.log("o");
console.log("z");
console.log("i");

}


// sayMyName()


// function addTwoNumbers(number1 , number2){
//         console.log(number1 + number2);

// }


function addTwoNumbers(number1 , number2){
    // let result = number1 + number2 
    // return result

    return number1+ number2
}

const result  = addTwoNumbers(3 ,6)


// console.log(result);


function loginUserMsg (username="sam")
{
    if (!username) {

        console.log("please enter a username ");
        return
    }
    return ` ${username} just logged in`

}


console.log(loginUserMsg("SHozab")
);
