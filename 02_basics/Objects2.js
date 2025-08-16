// Singleton(Constructors) // -> singleton Object
// const tinderUser = newObject() -> non-singleton Object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "someone@gmail.com",
    fullname:{
        userfullname: {
        firstname:"Pratik",
        lastname: "Kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

 const obj1 = {1: "a", 2: "b"}
 const obj2 = {3: "a", 4: "b"}
 const obj4 = {5: "a", 6: "b"}

//  const obj3 = {obj1, obj2}
//  const obj3 = Object.assign(obj1, obj2, obj4)
//  const obj3 = Object.assign({}, obj1, obj2, obj4) // preferred(refer documentation)

const obj3 = {...obj1, ...obj2, ...obj4} // More Simpler Method(Mostly used)
console.log(obj3)

const users = [
    {
        id: 1,
        email: "pr@gmail.com"
    },
    {
        id: 1,
        email: "pr@gmail.com"
    },
    {
        id: 1,
        email: "pr@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

