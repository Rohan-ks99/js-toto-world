// array 
const myArr = [0,1,2,3,4,5]
// inner value called as element for array we use square bracket
console.log(myArr[0]);
// Array use the same referencs or we can say shallow copy 
// deep copy is not sharing the same referance 
const myhero = ["spiderman" ,"batman"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// Array method 
// myArr.push(6)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
const newArr =myArr.join()
//join it convert array into string 

// console.log(myArr);
// console.log( typeof newArr);
//slice ,splice 
console.log("A",myArr);
const myn1 = myArr.slice(1,3)


console.log(myn1);
console.log("B", myArr)
const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);











console.log(myArr);
