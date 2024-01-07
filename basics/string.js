const name  = " Shozab"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Shozab-king-sj')

console.log(gameName[0]);

console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt('3'));

const newString =   gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);



const newStringOne  = "      Shozab       "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shozab.com/shozab%20khan"

console.log(url.replace('%20', '-'));

console.log(url.includes('sho1zab'));    

console.log(gameName.split('-'));
