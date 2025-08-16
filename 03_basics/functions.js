function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
}

// sayMyName // -> this is called "Reference" of function
// sayMyName() // -> this is the "Execution" of function

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

// addTwoNumbers(4, 7) // 11
// addTwoNumbers(3, "5") // 35
// addTwoNumbers(8, null) // 8
// const result = addTwoNumbers(3, 5) // -> undefined

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result // m1
    // console.log("Hitesh") // -> never printed

    return number1 + number2 // m2
}

const result = addTwoNumbers(3, 5)
// console.log("Result:", result) // 8

function loginUserMessage(username = "sam"){ // if (username) -> without agrument it will output "undefined"
    if(username === undefined){     // can use -> if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Pratik"))
console.log(loginUserMessage("Hitesh")) // -> overwrites sam and output Hitesh instead of sam

