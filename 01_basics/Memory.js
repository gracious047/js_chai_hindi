// Stack(Primitive) -> (make a copy) & Heap(non-Primitive) -> (take reference)

let myYoutubeName = "Pratikdotcom"
let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName)
console.log(anotherName)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "pratik@google.com"

console.log(userOne.email);
console.log(userTwo.email);

