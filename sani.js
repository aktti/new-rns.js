// var x = 0;
// do {
//     console.log(x);
//     x++; // Increment x to avoid infinite loop
// } while (x > 0 && x < 5); // Add a condition to stop after a few iterations

const { json } = require("express");
const { reset } = require("nodemon");



// value interchange without swap method and without taking third variable
// let a=5;
// let b=10;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log("A :",a,"B :",b);


// const a = 10;
// const b = 8;
// const c = 9;

// if (a > b && a > c) {
//     console.log(`A is the largest: ${a}`);
// } else if (b > a && b > c) {
//     console.log(`B is the largest: ${b}`);
// } else if (c > a && c > b) {
//     console.log(`C is the largest: ${c}`);
// } else {
//     console.log("There is a tie between the numbers.");
// }

// let text1 = "What A Very ";
// text1 += "Nice Day";

// console.log(text1);


// function myFunction(p1,p2){
//     return p1 * p2;
// }

// let result = myFunction(4,9)
// console.log(result);

// function toCelsius(f){
//     return (5/9) * (f-32)
// }

// let value = toCelsius(77)
// console.log(value); 



// Call  Method()

// const person =  {
//     fullName:function() {
//         return this.firstName + " " + this.lastName;
//     }
// }

// const person1 = {
//     firstName : "Sanidhya",
//     lastName  : "Dwivedi"
// }

// const person2 = {
//     firstName : "Yash",
//     lastName  : "Nebhnani"
// }
//  console.log(person.fullName.call(person2));
 
// Asynchronous Method()

// function myDisplayer(something) {
// console.log(something);
// }

// function myCalculator(num1,num2,myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
// }

// myCalculator(10,20,myDisplayer);

// Class Method()

// class Car {
//     constructor(name, year){
//   this.name= name
//   this.year= year
//     }
//     age(x){
//     return x - this.year
//     }
// }

// const date = new Date();
// let year = date.getFullYear();

// const myCar = new Car("ford",2014);
// console.log("My Car Is "+ myCar.age(year) + " Years Old. ");

// class Car {
//     constructor(name, year){
//   this.name= name
//   this.year= year
//     }
// }

// const myCar1 = new Car("Ford")
// const myCar2 = new Car("Audi",2015)
// console.log(myCar1.name + " " + myCar2.name);


// const x = (x, y) => { return x * y };
// console.log(x(5,5));


// const person = {
//     fullName: function(city,country){
//         return this.firstName + " " + this.lastName + " , " + city + " ," +country
//     }
// }

// const person1 = {
//     firstName:"Sanidhya",
//     lastName: "Dwivedi"
//   }

//   console.log(person.fullName.apply(person1,["Kota","Jaipur"]));


//  function myDisplay() {
//     let myPromise = new promise(function(resolve) {
//         setTimeout(function() {
//             resolve("Hello, How Are You");
//         }, 3000);
//     });

//     myPromise.then(function(value) {
//         console.log(value);
//     });
// };

// myDisplay();


// let text = ""
// let i = 0;

// do {
//   text += "<br>The number is " + i;
//   i++;
// }
// while (i < 10);  
// console.log(text);


// Create an Object
// const person = {
//     firstName: "Sanidhya",
//     lastName: "Dwivedi",
//     age: 19
//   };
  
//   // Destructuring
//   let {lastName, firstName} = person;
//   console.log(firstName,lastName);
  

// let name = "W3schools";
// let a1 = name;
// console.log(a1);

// const person = {fname:"Sanidhya",lname:"Dwivedi",age:19}

// let txt = "";
// for(let x in  person) {
//     txt += person[x]  + " ";
// }

// console.log(txt);


// function myDisplayer(some){
//     console.log(some);
    
// }
// async function myFunction() {return "Hello";}
// myFunction().then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);},

// )

// console.log(add());
// function add(){
//     let counter=200;
//     function plus() { counter += 1;}
//     plus();
//     return counter;
// }

// const person = {
//     firstName :"Sanidhya",
//     lastName  : "Dwivedi",
//     language  :"NO",
//     set lang(value) {
//         this.language = value;
//     }
// };
// person.lang = "en"
// console.log(person.language);


// const obj = {counter : 0};
// Object.defineProperty(obj,reset,{
// get : function () {this.counter = 0;}
// });
// Object.defineProperty(obj, "increment", {
// get : function () {this.counter++;}
//   });
// Object.defineProperty(obj, "decrement", {
// get : function () {this.counter--;}
//   });
// Object.defineProperty(obj, "add", {
// set : function (value) {this.counter += value;}
//   });
// Object.defineProperty(obj, "subtract", {
// set : function (value) {this.counter -= value;}
//   });
  
// obj.reset;
// obj.add = 5;
// obj.subtract = 1;
// obj.increment;
// obj.decrement;

// console.log(obj.counter);
  
// const person = {
//     firstName:"Sanidhya",
//     lastName :"Dwivedi",
//     age      :19,
//     fullName :function(){
//         return this.firstName + " " + this.lastName + " " + this.age
//     }
// }
// console.log(person.fullName());
// console.log(Math.sqrt(4));


// function sum(...args) {
//     let sum = 0;
//     for(let arg of args) sum += arg;
//     return sum; 
// }
// let x = sum(4,9,16,25,29,100,66,77);
// console.log(x);

// function findMax() {
//     let max = Infinity;
//     for(let i = 0; i < arguments.length;i++){
//         if(arguments[i] > max){
//             max = arguments[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(4,5,6));

// class Car {
//     constructor(brand){
//         this.carname = brand;
//     }
//     present(){
//         return 'I Have A ' + this.carname;
//     }
// }
// class Model extends Car {
//     constructor(brand,mod){
//         super(brand);
//         this.model = mod;
//     }
//     show(){
//         return this.present + ', It Is A ' + this.model;
//     }
// }
// const myCar = new Model("Ford","BMW");
// console.log(myCar);
// myCar.show()

// let day;
// switch(new Date().getDay()) {
//     case 0:
//     day ="Sunday";
//     break;
//     case 1:
//     day ="Monday";
//     break;
//     case 2:
//     day ="Tuesday";
//     break;
//     case 3:
//      day ="Wednesday";
//     break;
//     case 4:
//     day ="Thursday";
//     break;
//     case 5:
//     day ="Friday";
//     break;
//     case 6:
//     day ="Saturday";
// }
// console.log("Today Is " + day);


// let text;
// switch(new Date().getDay()) {
// case 6 :
// text = "Today Is Saturday";
// break;
// case 0 :
// text = "Today Is Sunday";
// break;
// default:
// text = "Looking forward to the Weekend";
// }

// console.log(text);


// function sum(x,y) {
//     return x+y;
// }
// console.log(sum(10,200));


// let n = 5;
// let string = "";
// for(let i = 1 ; i <=n; i++) {
//     // Printing Spaces
//     for(let j = 0; j<n - i;j++ ){
//         string+= " ";
//     }
//     // Printing Star
//     for(let k = 0; k < i;k++){
//         string += "*";
//     }
//     string +="\n"
// }
// console.log(string);

// let n = 5;
// let string = "";

// for (let i = 0; i < n; i++) {
//   // printing star
//   for (let k = 0; k < n - i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// function sum (a,b) {
//  return a*b
// }
// console.log(sum(2,10));


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);

// fruits.sort();
// console.log(fruits);


// var object = {
//     name: "sanidhya",
//     number: 9666666
// };

// var keys = Object.keys(object);

// for (var i = 0; i < keys.length; i++) {
//     console.log(object[keys[i]]);
// }


// var object = {
//     name:"Sanidhya",
//     number:9216393256
// };
// var numberString = object.number.toString();
// var firstDigit = numberString.charAt(0);
// console.log(firstDigit);


// var keys = Object.keys(object)
// for (var i = 0; i < keys.length; i++ ){
//     console.log(object[keys[i]]);  
// }

// const a = 55
// const b = 78
// const c = a+b
// console.log(c);

// var object = {
// name:"Sanidhya",
// number:9216393256
// };
//  var numberString = object.number.toString();
//  var firstDigit = numberString.charAt(0);
// console.log(firstDigit);

// var keys = Object.keys(object)
// for(var i = 0; i < keys.length; i++){
//     console.log(object[keys[i]]);
// }

// for(let i = 1; i < 5; i++){
// console.log(i);    
// }

// const a = 89;
// const b = 78;
// const c = a-b;
// console.log(c);


// const person={
//     firstName:"Sanidhya",
//     lastName:"Dwivedi",
//     age:19    
// }
// console.log(person);

// let text;
// switch(new Date().getDay()) {
//     case 6 :
//     text = "Today Is Monday";
//     break;
//     case 0:
//     text = "Tomorrow Is Tuesday";  
//     default:
//      text = "Looking forward to the Weekend";    
// }
// console.log(text);


// for(let i =5; i<10; i++){
//     console.warn(i)
// }

// function sum(...args){
//     let sum = 0;
//     for(let arg of args) sum+= arg;
//     return sum;
// }
// let x = sum(4,9,16,25,29,100,66,77,88,99,63);
// console.log(x);


// const person={
// firstName:"Sanidhya",
// lastName:"Dwivedi",
// age:19,
// mobileNo:9216393256
// }
// console.warn(person);

// console.time("for loop");
// for (let i = 0; i < 1000000; i++) {
// }
// console.timeEnd("for loop");

// let i = 0;
// console.time("while loop");
// while (i < 1000000) {
//   i++;
// }
// console.timeEnd("while loop");

// function myFunction() {
//     myOtherFunction();
//   }
  
//   function myOtherFunction() {
//     console.trace();
//   }
  
//   console(myFunction())

// function myDisplayer(something){
//     console.log(something);
// }

// let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
//   // some code (try to change x to 5)
  
//     if (x == 1) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
  // myPromise.then(
  //   function(value) {myDisplayer(value);},
  //   function(error) {myDisplayer(error);}
  // );


  // // Creating A Array
  // const myNumbers = [4,1,-20,-7,5,9,-6];

  // // Call RemoveNeg With A Callback
  // const posNumbers = removeNeg(myNumbers ,(x)=> x <=0);

  // // Display Result
  // console.log(posNumbers);

  // // Remove Negative Numbers

  // function removeNeg(numbers,callback){
  //   const myArray = [];
  //   for(const x of numbers) {
  //     if(callback(x)){
  //       myArray.push(x);
  //     }
  //   }
  //   return myArray;
  // }

  // function greet() {
  //   console.log("Hello World!");
  // }

  // Call The Greet Function After
  //2000 Milliseconds(2 Seconds)
// setTimeout(greet,2000)


// const person = {
//   firstName: "Sanidhya",
//   lastName: "Dwivedi",
//   language: "EN"
// };

// Adding or modifying the 'Language' property using Object.defineProperty()
// Object.defineProperty(person, "language", {
//   value: "NO",
//   writable: true,  // Allows modification later if needed
//   enumerable: true, // Makes it visible during enumeration (for example in for-in loops)
//   configurable: true // Allows redefinition of this property later
// });

// Log the person object to check the changes
// console.log(person);

// Creating A Array
// const myNumbers = [5,9,30,80,40,20,-50,-10,-2];

// Call RemoveNeg With A Callback
// const posNumbers = removeNeg(myNumbers,  (x)=>  x >=0);

// Display Result
// console.log(posNumbers);

// Remove Negative Numbers

// function removeNeg(numbers,callback) {
//   const myArray = [];
//   for(const x of numbers) {
//     if(callback(x)){
//       myArray.push(x);
//     }
//   }
//   return myArray;
// }

// const person = {fName:"Ravi",lName:"Dwivedi",age:40}

// let txt = "";
// for(let x in person) {
//   txt += person[x] + " ";
// }
// console.log(txt);

// const  numbers = [45,4,9,16,25,90];

// let txt = "";
// numbers.forEach(myFunction)
// console.log(txt);

// function myFunction(value, index,array) {
//   txt += value + "\n";
// }


// const time = new Date().getHours();
// let greeting;
// if(time < 10) {
//   greeting = "Good Morning";
// }else if(time < 20) {
//   greeting = "Good Day";
// }else if(time < 30) {
//   greeting = "Good Evening";
// }else{
//   greeting = "Good Night";
// }
// console.log(greeting);

// const person = new Object();
// person.firstName = "Sanidhya";
// person.lastName = "Dwivedi";
// person.age = 19;
// person.eyeColor = "blue"; 
// console.log(person);


// const person = {
//   firstName: "Sanidhya",
//   lastName: "Dwivedi",
//   age: 19,
//   mobileNo: 9216393256,
//   fName: "Ravi Dwivedi",
//   mName:"Shuchi Dwivedi" ,
//   display: function() {
//     console.log(this.firstName, this.lastName, this.age,this.mobileNo,this.fName,this.mName);
//   }
// };

// let display = person.display.bind(person);
// setTimeout(display, 9000);

// let a = 2;
// let b = 100;
// let c = a+b
// console.log(c);


// const fruits = ["Banana","Orange","Apple","Mango","Papaya"];
// console.log(fruits);

// fruits.sort();
// console.log(fruits);


// const person ={
//   firstName:"Sanidhya",
//   lastName:"Dwivedi",
//   age:18
// }
// console.log(person);

// for(let i = 0; i < 9; i++){
//   console.log(i);
// }

// function sum(x,y) {
//   return x+y;
// }
// console.log(sum(45,20));

// const a = 89;
// const b = 50;
// const c = a*b;
// console.log(c);

// const myArray = [5.9,10,90,100,900]
// console.log(myArray);

// console.warn(1)


//  const a= function(a) {
//   return a 
//  }

// console.log(a);

// let a = 10;
// let x = (100+90)* a;
// console.log(x);

// const x = function(a,b) {return a*b};
// console.log(x(4,90));

// const myNumbers = [4,8,9,3,6,0,-9];

// const posNumbers = removeNeg(myNumbers, (x)=> x >=0);

// console.log(posNumbers);

// function removeNeg(numbers,callback) {
//   const myArray = [];
//   for(const x of numbers){
//     if(callback(x)){
//       myArray.push(x);
//     }
//   }
//   return myArray;
// }

// const numbers = [45,4,9,16,25,23];

// let txt = "";
// numbers.forEach(myFunction);
// console.log(txt);

// function myFunction(value) {
//   txt += value + "\n";
// }

// let language = "Javascript";

// let text = "";
// for(let x of language) {
//   text += x + "\n";
// }
// console.log(text);

// const a = function(a){
//   let i=0;
//   let b ="";
//   for(let i = 5;i<8;i++){
// console.log(i);
//   }
// }

// console.log(a);

// let x = 123456789012345678901234567890n;
// let y = BigInt("123456789012345678901234567890");

// console.log(x,y);

// const person = {
//   firstName:"Sanidhnya",
//   lastName:"Dwivedi",
//   age:19,
//   city:"Jaipur"
// };

// const personString = JSON.stringify(person);
// console.log(personString);

// function myDisplayer(some) {
//   console.log(some);
// }

// let myPromise = new Promise(function(myResolve,myReject) {
//   let x = 0;

//   // Some Code (Try To Change x To 5)

//   if(x==0) {
//     myResolve("OK");
//   }else{
//     myReject("Error");
//   }

// });

// myPromise.then(
//   function(value) {myDisplayer(value);},
//   function(error) {myDisplayer(error);}
// );

// const d = Date("2024-12-27");
// console.log(d);

// const temp = [27, 28, 30, 40, 42, 35, 30];
// let pos = temp.findLastIndex(x => x > 40);

// console.log(pos);

// const myArray =[2,3,4,5,8,90,200,1]

// myArray.sort();
// console.log(myArray);

// const a = function(a) {
//   return a;
// }

// for(let a = 2;a<5;a++){
//   console.log(a);
// }

// a();

// const v = function(v) {
//    return v;

// }

// for(let i =9 ; i<12;i++){
//   console.log(i);
  
// }

// v(2);

// function a(l){
//   for(let l = 5; l<9;l++){
//     console.log(l); 
//   }

//   return l;
// };

// a();

// const sanidhya =()=>{
//   const a =2;
//   console.log(a);
//   return a;
// }
//  sanidhya();




