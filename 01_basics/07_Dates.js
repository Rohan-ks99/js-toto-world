//Dates

let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toLocaleString());
let myCreatedDate = new Date(2026,0,10)
console.log(myCreatedDate.toDateString());
let mycreatedate = new Date("01-12-2026")
console.log(mycreatedate.toLocaleString());

// all times in mili second 

let myTimeStamp  =Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));











