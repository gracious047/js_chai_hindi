// Dates
let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleTimeString())

// console.log(typeof myDate)

// let myCreatedDate = new Date(2025, 0, 15)
// console.log(myCreatedDate.toDateString())
// let myCreatedDate = new Date(2025, 0, 15, 5, 3)
// let myCreatedDate = new Date("2025-01-15")
let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

  let newDate = new Date()
//   console.log(newDate)
//   console.log(newDate.getMonth() + 1) // Months in js starts from 0 so plus 1 to get exact month
//   console.log(newDate.getDay())

// console.log(`The month is ${newDate.getMonth() + 1} and the day is ${newDate.getDay()}`)

newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(newDate.toLocaleString())
