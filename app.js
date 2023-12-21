// // console.log(Array.from("Rockstar"));

// const mysym = Symbol("key1")

// const obj1 = {
//     [mysym] : "My infor"
// }
// console.log(obj1[mysym]);

// function cart(...num1) {
//     return num1
// }
// console.log(cart(450,200,900,700));

const course = {
    coursename : "React-js",
    price : "2399",
    courseInstructor : "Brayan"

}

const {courseInstructor : teacher, price : RS} = course
console.log(teacher);
console.log(RS);