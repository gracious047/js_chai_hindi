// function calCulatecartPrice(...num1){ // ... -> known as Rest operator in function parameters
function calCulatecartPrice(val1, val2, ...num1){ 
    return num1
}

// console.log(calCulatecartPrice(200, 500, 780, 5000)) // [200, 500, 780, 5000]
// console.log(calCulatecartPrice(200, 500, 780, 5000)) // [780, 5000]

const user = {
    username: "Pratik",
    price: 199
}

function handleObject(anybody){
    console.log(`Username is ${anybody.username} and price is ${anybody.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
}) 

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200, 700, 500, 1000]))

