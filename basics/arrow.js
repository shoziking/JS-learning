const user = {
    username : "shozab",
    price : 999,

    welcomeMessage: function ()
    {
        console.log(`${this.username}, welcome to Website`);
        console.log(this);
    }
}

// user.welcomeMessage()

// user.username = "sam"

// user.welcomeMessage()


// console.log(this);


// function one ()
// {
//     let username = "shozab"
//     console.log(this.username);
// }

// one()


const shozi =  () =>
{
    let username = " manahil "
    console.log(this);
}

// shozi()




// console.log(
//     manahil(4, 5));


const manahil =(num1, num2) =>  (num1+num2)

console.log(manahil(4 ,4 ));
