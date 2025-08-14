const accountId = 144553
let accountEmail = "pratik@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // changes not allowed

console.log(accountId)

accountEmail = "pratik@pkr.com"
accountPassword = "45562"
accountCity = "Bengaluru"

/*  
Prefer not to use 
because of issue in block scope and functional block
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
