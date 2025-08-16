const user = {  // this keyword -> Refers to the object in the  'current context' of execution
    username: "Pratik",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this); // current context
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this) // {} (here, empty object)
// *Note : Inside browser output will be -> Window(global object)

// function chai(){
//     let username = "Pratik" 
//     console.log(this.username)  // undefined
// }

// chai()


const chai = () => {
    let username = "Pratik"
    console.log(this)
}

// chai() // {}

// const addTwo = (num1, num2) => {  // -> Explicit return : 'return' keword is used explicitly
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (num1 + num2)  // -> Implicit return

const addTwo = (num1, num2) => ({username : "Pratik"})

console.log(addTwo(3, 4))

