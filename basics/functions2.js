function calculateCartPrice (...num1)
{
    return num1
}

console.log(calculateCartPrice(200,400,500));



const user ={
    username : " SHozab",
    price : 100
}

function handleObject (anyObject){
console.log( ` Username is  ${anyObject.username}  and Price is  ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username : " Mnahil",
    price : 199
})




const myNewArray = [
    200,100,600,400
]

function retrunSecondValue(getArray){
    return getArray[2]

}

// console.log(retrunSecondValue(myNewArray));
console.log(retrunSecondValue([200,100,10002 ,1000034]));