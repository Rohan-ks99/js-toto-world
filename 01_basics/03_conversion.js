let score  = undefined
console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
//"33" => 33
//"33abc" => NaN => not a number 
//true => 1;false =>0
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// 1 =>true; 0=>false;
// " "=> false
// "hitesh"=> true
let s =33
let stringNumber = String(s)
console.log(stringNumber);
 console.log(typeof stringNumber);
 // ****************************** Operations*********************//
 let value  =3 
 let negvalue =-value
//  console.log(negvalue);
//  console.log(2+2);
//  console.log(2-2);
//  console.log(2*2);
//  console.log(2**2);
//  console.log(2/2);
//  console.log(2%2);
let str  ="hello"
let str2 = " Rohan"
let str3 = str + str2
console.log(str3);
console.log("1" + 2)
console.log("1" + 2 +3)
console.log(1 + "2" )
console.log(1 + 2 +"3");

//console.log(+true) => 1
//console.log(true) => true
let game =100
game++;
console.log(game);
//study this conversion 


/*************************************/
// Stack (prim)itive),Heap(Non- Primitive)
//primitive 

let myyoutube = "totoworld"
let anothername =myyoutube 
anothername = "whitekira"
console.log(myyoutube);
console.log(anothername);
//non-primitive 
let userone ={
    email : "user@google.com",
    upi :"user@ibl"
}
let userTwo = userone
userTwo.email = "kira@google.com"
console.log(userone.email);
console.log(userTwo.email);
