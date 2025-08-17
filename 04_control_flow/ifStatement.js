// if
const isUserloggedIn = true
// if(isUserloggedIn){
//     /// then execute
// }

// 3 != 2 -> // true

// if(2 == "2"){
//     console.log("Executed")
// }

// if(2 != 3){
//     console.log("Executed")
// }

const temperature = 41

// if(temperature < 50){
//     console.log("Less than 50")
// }
// console.log("Temperature is greater than 50")

//  if(temperature === 40){
//     console.log("Less than 50")
//  }
//  else{
//     console.log("Temperature is greater than 50")
//  }
// console.log("Executed")

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200
// if(score > 100){
//     let power = "Fly"
//     console.log(`User power : ${power}`);
// }

// console.log(`User power : ${power}`)

const balance = 1000
// if(balance > 500) console.log("Test"), console.log("Test2"); // this is valid but it makes the code 'unreadable'

// if(balance < 500){
//     console.log("Less than 500");
// }

// else if(balance < 750){
//     console.log("Less than 750");
// }

// else if(balance < 900){
//     console.log("Less than 900");
// }

// else {
//     console.log("Less than 1200");
// }

const UserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if(UserloggedIn && debitCard ){
//     console.log("Allow to buy course")
// }

if(UserloggedIn && debitCard && 2 == 3){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}