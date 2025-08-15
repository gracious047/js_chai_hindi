// Objects are declared in two ways i) Literals ii)Constructors
// When Objects are declared as literals then -> Singleton doesn't form
// When Objects are declared as constructors then -> Singleton are form

// object literals
const JsUser = {
    name: "Pratik",
    "full name": "Pratik Kumar",
    age: 20,
    location: "Jaipur",
    email: "pratik@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

console.log(JsUser.email) // 1st Method (but not preferable)
console.log(JsUser["email"]) // 2nd Method -> Better Method(preferable)
console.log(JsUser["full name"])
