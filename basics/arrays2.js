const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["super", "flash", "batman"]


// marvelHeros.push(dcHeros)

// console.log(marvelHeros);

// const allHeros = marvelHeros.concat(dcHeros)

// console.log(allHeros);

const allNewHeros = [...marvelHeros,...dcHeros]
// console.log(allNewHeros);

const anotherArr = [1,2,3,4,[5,6,7],[8,9],5]

let realAnotherArr = anotherArr.flat(Infinity)
console.log(realAnotherArr);

Array.isArray("Shozab")

console.log(Array.isArray("Shozab"));
console.log(Array.from("Shozab"));
console.log(Array.from({name : " Shozab"}));


let scoreOne = 100
let scoreTwo = 200
let scoreThree = 400
console.log(Array.of(scoreOne,scoreTwo,scoreThree));