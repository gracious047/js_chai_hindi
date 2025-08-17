// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Namaste India!"
for(const greet of greeting){
    // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

//Objects
const myObject = {
    'game1': "NFS",
    'game2' : "Spiderman"
}

// for (const [key, value] of myObject) {  // TypeError: myObject is not iterable
//     console.log(key, ':-', value);
// }

