// Objects are declared in two ways i) Literals ii)Constructors
// When Objects are declared as literals then -> Singleton doesn't form
// When Objects are declared as constructors then -> Singleton are form

// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Pratik",
    "full name": "Pratik Kumar",
    [mySym]: "myKey1",
    age: 20,
    location: "Jaipur",
    email: "pratik@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(JsUser.email) // 1st Method (but not preferable)
// console.log(JsUser["email"]) // 2nd Method -> Better Method(preferable)
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "pratik@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "pratik@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}

console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greetingTwo())
