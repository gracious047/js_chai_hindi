// var c = 300
let a = 300  // Global scope
if(true){
    let a = 10 // Block Scope
    const b = 20
    // var c = 30 // do not USE
    // console.log("INNER: ", a)
}

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // 30 -> Unexpected behaviour: this is why var should not be used
// console.log(a)

function one(){
    const username = "Pratik"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // ReferenceError: website is not defined

    two()
    console.log("Name is : ", username)
}

// one()


if(true){
    const username = "Pratik"
    if(username === "Pratik"){
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);  // -> website is not defined (Basically, website is out of scope)
}
// console.log(username) // -> website is not defined (Basically, website is out of scope)


//          Interesting
console.log(addone(5)) // No error
function addone(num){  // These are simply called -> 'functions'
    return num + 1
}
// addone(5)  // -> ReferenceError: Cannot access 'addTwo' before initialization
addTwo(5) 
const addTwo = function(num){ // These are called -> 'expressions or function expressions'
    return num + 2
}
// addTwo()


// *Note : it depends on how you 'declare a function' -> some give no error and some give error
