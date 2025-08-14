// Primitive

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = false
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

// const bigNumber = 3245234213425565634n

// Reference (Non-primitive)
// Arrays, Objects, Functions
const heros = ["Shaktimaan", "Naagraj", "Doga"]
//Objects are always under curly braces
let myObject = {    
    name: "Pratik",
    age: 22,
}
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp) // object
console.log(typeof anotherId) // symbol
console.log(typeof BigNumber) // undefined
console.log(typeof heros) // object
console.log(typeof myFunction) // function
console.log(typeof scoreValue) // number


