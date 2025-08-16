// IIFE :- Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }()  // SyntaxError: Unexpected token ')' -> this comes without parentheses

(function chai(){  // this is -> 'named IIFE'
    console.log(`DB CONNECTED`);
})(); // not automatically added in this(iife) case

// (function aurcode(){
//     console.log(`DB CONNECTED TWO`); // TypeError: (intermediate value)(...) is not a function -> to remove this we use semicolon(;)
// }) ()

// We are also use arrow function for same :- 
( (name) => {  // we can add parameter | // this is -> 'simple IIFE'
    console.log(`DB CONNECTED TWO ${name}`)
} )("Pratik")  // we can add argument
