// Do while loop

// let i = 5;
// do{
//     i++;
//     if(i==8){
//         continue;
//     }
//     console.log(i);
    
// } while(i<=10);



// Function

// user define function

// function addition(a,b){
//     return (a+b);   
// }

// console.log(addition(5,3));

// function mult(a, b) { //   mult -function name , a and b - parameter
//   let c = a*b; //           c - new variable
//     return c;
// }
// let res = mult(7, 9);  
// console.log(res);


// function div(a, b) {
//     let r = a/b;
//     return r;
// }

// let roshan = div(18, 6);
// console.log(roshan);


// Pure function

// function income(salary) {
//     return`My salary is ${salary}.`  // $ {variable} - will print the value
// }

// let line = income(50000);
// console.log(line);


// Impure Function

// let incentive = Number(prompt('Enter incentive for this months:' ));
// function income(salary) {
//    let total = salary + incentive;
//     return `MY salary is ${total}`
// }
// let result = income(50000);
// console.log(result);

// First class function

// let add = function(x, y) {
//     let z = x+y;
//     return z;
// }
// let result = add(10,20);
// console.log(result);


// Higher order

// function hello() {
//     console.log('hello');
// }

// function hello();
//     }
// }

// higherOrder(hello);

// Addition

// let a = 25;
// let b = 25;

// console.log("a ** b",a**b)

// let a = 15
// let b = 20

// let cond1 = a > b;
// let cond2 = a === 25;
// console.log("cond1 || cond2 = ", cond1 || cond2);

// while loop

// let i = 1;
// while(i<=10000) {
//     console.log(i);
//     i++;
// }

// DO while loop

// let i = 10;
// do {
//     console.log(i);
//     i++;
// }while (i <= 98);


// For of loop

// let str = "The opening sentence that introduces the main idea or focus of the paragraph.";
// for (let r of str) {
//     console.log("r-", r);
// }

// For in loop

// let student = {
//     name: "Roshan",
//     age: 22,
//     city: "poladpur",
//     isPass: true,
// };

// for (let key in student) {
//     console.log("key=", key, "value=", student[key]);
// }

// sum/even number ex

// let i=0;
// for (i=0; i<=100; i++) {
//     if (i%2!==0)
//     console.log("i=", i);
// }

// Guess game

// let gameNum= 37;

// let userNum = prompt(" Guess the Number :");

// while (userNum != gameNum) {
//     userNum = prompt(" you entered wrong number.Guess again :");


// }

// console.log("you make it");


// 2 nd nov

// const welcome = (name) => `Hello all this is ${name}`; // Arrow function
// console.log(welcome("Roshan"));


// const welcome = (name) => {
//     return `Hello all this is ${name}`;
// };
// console.log(welcome("Roshan"));


// function with default parameter

// const welcome = (name = "Roshan") => {
//     return `Hello all this is ${name}`;
// };
// console.log(welcome(""));

// anonymous function

// (function() {
//     console.log("Hello all this is Roshan");
// })
// ();


// Number formatting

// Math.tofixed

// let num = 1234.56789;
// console.log(num.toFixed(2));

// Math.toPrecision

// let num = 1234.56789;
// console.log(num.toPrecision(5));

// Math.round

// let num = 1234.56789;
// console.log(Math.round(num));

//  math.floor 
// let num = 1234.56789;
// console.log(Math.floor(num));


// // Math.ceil
// let num = 1234.56789;
// console.log(Math.ceil(num));



// let studentName = "Roshan";
// let age =22;
// let cousre = 'Full Stack Development';

// console.log('student information');
// console.log('student name:', studentName);
// console.log('age:', age);
// console.log('course:', cousre);



// object in javascript

// the collection of key value pair is called object in javascript

let student = {
    name: "Roshan",
    "roll no": 123,
    age: 22,
    city: "poladpur",
    isPass: true,
};
console.log(student);

student.age= 89;
console.log(student);

student.email = "roshan@example.com";
console.log(student);

delete student.city;
console.log(student);

console.log(student);
console.log(student.name);
console.log(student["roll no"]);
