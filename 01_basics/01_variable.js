const accountId =12345
let accountEmail = "rohan@google.com"
var accountPassword ="12345"
accountCity ="Delhi"

//accountId =2 ,not  allowed
/*prefer not to use var 
because of issue in block scope and functional scope
*/
accountEmail= "kira@toto.com" 
accountPassword ="212121"
accountCity ="USA"
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity])
