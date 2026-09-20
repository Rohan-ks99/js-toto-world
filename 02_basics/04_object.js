//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id ="123abcd"
tinderUser.name = "red"
tinderUser.isLoggedIn = false
console.log(tinderUser);
const regularUser ={
    email:"red@gmail.com",
    fullname:{
        userfullname:{
            firstname:"rohan",
            lastname:"kasyap"
        }

    }
}
console.log(regularUser.fullname.userfullname.firstname);
//we use the ? is some element exist or not 
const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
const obj4 ={5:"a",6:"b"}
//const obj3 ={obj1,obj2}

//const obj3 = Object.assign({},obj1,obj2,obj4)
//console.log(obj3);
// when we use object.assign static method the object we created and the first object which marge with other object is equal like obj3 =obj1
const obj3 = {...obj1,...obj2}
console.log(obj3);
const users =[
    {
        id:1,
        email:"r@gmail.com"
    },
    {
        id:1,
        email:"r@gmail.com"
    },
    {
        id:1,
        email:"r@gmail.com"
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course  = {
    coursename:"js by kira ",
    price:"999",
    courseInstructor:"toto"
}
//course.courseInstructor


const {courseInstructor: intructor} = course
//console.log(courseInstructor);
console.log(intructor);

// this use in react 
// const navbar =({company}) =>{

// }
// navbar(company = "toto")
// {
//     name:"rohan",
//     coursename:"js by kira ",
//     price:"free"
// }





