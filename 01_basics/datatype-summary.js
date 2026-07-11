// primitive
// 7 types : String,Number,Boolean,null, undefined,symbol,BigInt
const score = 100 
const scValue =100.3
const isLoggedIn =false 
const outsideTWemp = null // the returntype of null is object 
let userEmail;
const id = Symbol('123')
const anotherId =Symbol('123')
console.log(id === anotherId);
const bigNumber = 34296745n // the returntype of bigint is undefined 

// Reference (Non primitive)

// Array,Objects,Functions

 const heros =["spiderman","tyler","batman"] // the return type of the array is object 
 let myObj ={
    name :"rohan",
    age : 22 ,
 } /// the return type of object is object 
 const myFunction  = function(){
   console.log("Hello world");
 }// the return type of the fuction is funtion object 
 console.log(typeof myFunction);
 console.log(myFunction);