const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
    
// } )

// Using Arrow function
// coding.forEach((item) => {
//     console.log(item)
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

// Object inside Array
const myCoding = [
    {
        langauageName: "Javascript",
        languageFileName: "js"
    },
    {
        langauageName: "Java",
        languageFileName: "java"
    },
    {
        langauageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langauageName);
    // console.log(item.languageFileName);
} )  
