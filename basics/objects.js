

const mySym = Symbol("key1")

const JsUser ={ 
    name : " Shozab ",
    "full name " : " Shozab khan",
    [mySym] : "mykey1",
    age : 18 ,
    location : " Dera ghazi khan",
    email : "shozab@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["monday ", "friday"]

}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser.name);
console.log(JsUser["full name "]);
console.log(JsUser[mySym]);

JsUser.email = " shozabk@gmail.com  "
// Object.freeze(JsUser)
JsUser.email = " kingkhan@gmail.com"

console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS");

}



JsUser.greetingTwo = function(){
    console.log(`Hello JS, ${this.name}`);
                         
}
console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());