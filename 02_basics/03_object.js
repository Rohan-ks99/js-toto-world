// singleton 
//oblect literals
const mys = Symbol("key1")
const JsUser ={
    "full name":"rohan kasyap",
    name:"rohan",
    age: 18,
    location:"delhi",
    email:"rohan@google.com",
    isloggedin: false,
    lastloginday:["monday","saturday"],
    [mys]:"mykey1"
}
console.log(JsUser.email);
// there is anotherr way 
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
//if we use symbol in object we use square bracket inside the object 
console.log(JsUser[mys]);
JsUser.email = "rohan@codex.com"
//Object.freeze(JsUser)
JsUser.emaill = "rohan@kira.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user,${this.name}`);
    
}
console.log(JsUser.greeting);
// this is just only give the referance 
console.log(JsUser.greeting());
// this execute the function 
console.log(JsUser.greetingTwo());
