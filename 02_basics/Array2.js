const marvel_heroes = ["Thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Flash", "Batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1])

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)

const all_new_heros = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heros)

// both concat and spread(...) are used to expand an array but spread is preferred over 
// concat as it works both on arrays and objects

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

// Array Conversion
console.log(Array.isArray("Pratik"))
console.log(Array.from("Pratik"))
console.log(Array.from({name: "Pratik"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))

