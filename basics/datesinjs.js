// Dates///
 
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());


// let myCreatedDate = new Date(2023, 0, 23)

// let myCreatedDate = new Date(2023, 0, 23 , 5 , 4)
let myCreatedDate = new Date("01-01-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));




let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1 );

console.log(newDate.getDay());




newDate.toLocaleString('default' , {
    weekday : "long",
})
