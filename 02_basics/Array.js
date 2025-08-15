// Array

const myArr = [0, 2, 6, 5, 7, 6]
const myHeroes = ["Captain America", "Ironman", "Thor"]

const myArr2 = new Array(1, 2, 5, 8, 10)
// console.log(myArr2[0])

// Array Methods
// myArr.push(12)
// myArr.push(56)
// myArr.pop()
// myArr.pop()
// console.log(myArr)

// myArr.unshift(9)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)

// slice, splice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr)
console.log(myn2)
