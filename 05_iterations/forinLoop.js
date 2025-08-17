// Since in 'forof' loop -> TypeError: myObject is not iterable
// That's why we use
// forin loop :
// Object
const myObject = {
    js : 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

//Array
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]); 
}

// Map
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
    // console.log(key); // Doesn't print anything
                     // *Note : As maps are not iterable
}