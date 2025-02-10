const accountId = 122552
let accountEmail = "azeem@mantiqh.com"
var accountPassword = "12345"
accountCity = "Bangalore"
let accountState;

//accountId = 33 // not allowed

accountEmail = "azeem.com"
accountPassword = "0000"
accountCity = "mumbai"

console.log(accountId);

/*
prefer not to use var
beacuse of issue in block scope and functional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
