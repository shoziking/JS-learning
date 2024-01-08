const tinderUser = new Object ()
tinderUser.id = " 123abc"
tinderUser.name = " SHozab"
tinderUser.isLoggedIn = false

console.log(tinderUser);


const regularUser = {
    email: " shozab@gmail.com",
    fullName : {
        userFullName : {
            firstName : " Shoza",
            lastName : "king"
        }
    }
}

// console.log(regularUser.fullName.userFullName.lastName);

const object1 = {
    1 : "a",
    2 : "b"
}

const object2 = {
    3 : " a",
    4 : "b"
}

const object3 = Object.assign({} , object1,object2)



console.log(object3);


const object4 = { ...object1,...object2}

console.log(object4);



console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));