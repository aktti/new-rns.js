
Practice Questions


Q.1 Write The Number Is 2 And  From 2 To 11 Prints  The Numbers? 1 Marks

let txt = "";

for(let i = 2 ; i < 12 ; i++){
    txt+= "The Numbers Is : " + i;       // 1
}

console.log(txt);

Q.2   Write A Number  Which is 20 and 90 . It Is Swap is 90 And 20 ? 9 Marks

let a = 20;
let b = 90;

console.log(`Before Swapping a: ${a}`);
console.log(`Before Swapping b: ${b}`);
                                               9

[b,a]=[a,b];

console.log(`After Swapping a:${a}`);
console.log(`After Swapping b:${b}`);

Q.3 Write A Fruits And Sort The Fruits?  2 Marks

const fruits = ["Banana","Orange","Apple","Mango","Papaya"];
console.log(fruits);

fruits.sort();      2
console.log(fruits);

Q.4 Write A Person Name,Age,MobileNo. Fname,Mname In Object? 4 Marks


const person = {
    FirstName:"Sanidhya",
    LastName:"Dwivedi",
    age:19,
    MobileNo:9216393256,
    Fname:"Ravi Dwivedi",
    Mname:"Shuchi Dwivedi",
    display:function(){
        console.log(this.FirstName,this.LastName,this.age,this.MobileNo,this.Fname,this.Mname);
        
    }
};

let display = person.display.bind(person);
setTimeout(display,9000);

4

Q.5 Write A Function Sum And Add The Two Numbers? 1 Marks

function sum(a,b){
    return a+b  
}

console.log(sum(9,5));


Q.6 Write A If And Else Conditions In A  Gretting? 20 Marks

const time = new Date().getHours();
let greeting;

if (time < 10) {
  greeting = "Good Morning";
} else if (time < 18) {  
  greeting = "Good Day";
} else if (time < 22) {  
  greeting = "Good Evening";
} else {
  greeting = "Good Night";
}

console.log(greeting);

37 / 40

const func = function(a, b) {
    a = b;
    b = a;

    for (let a = 8; a < 12; a++) {
        console.log(a);  
    }

    for (let b = 1; b < 8; b++) {
        console.log(b);
    }
}

func(5, 10);  

console.log('This is the outer "a":', 5);  

const a  =7;
console.log(a);

Test

Q.1 Write A Number In Which Loop Begin  With 2 And Ends The 52?

for(let i = 2; i<53; i++){
    console.log(i);
    
}

Q.2 Write A Person firstName,lastName,Age, City ,Mobile.No And Email In JSON.Strigify Form ?

const person = {
    firstName:"Sanidhya",
    lastName:"Dwivedi",
    age:19,
    city:"Jaipur",
    MobileNo:9216393256,
    Email:"DwivediSanidhya4@Gmail.com"
};

const personString = JSON.stringify(person);
console.log(personString);


Q.3 Write A Number In Which Loop Begins With 2 And With 60 .Write The For-Loop?

for(let i = 2; i<61;i++){
    console.log(i);
}

const a = function(a) {

for(let a=1;a<8;a++){
console.log(a);

 }
 return a;
}
a();

const a= 89;
const b = function(v){
    if(a==89){
        console.log("Correct Code");
        
    }else{
        console.log("Wrong Code");
        
    }
}

b();

const a =2
console.log(a*a);

const e = 81;
const v = 78;
const y = e - v;
console.log(y);

const a =87;
console.log(a);

let a =true;
let b =false;
let c =a-b;
console.log(c);


const x = new Boolean(false);
const y = new Boolean(false);
console.log(x===y);

Practice Question

 Q.1 Write a variable and create a function on this variable?

const a = function(x) {
    if (x <= 0) {
        return 0;
    }
    return x + a(x - 1); 
}

console.log(a(5));  -1 Marks

Q.2 Write a variable and create a for-loop on this variable and return the variable name?

const a = function(a){
    for(let a = 5; a<13; a++){
        console.log(a);      
    }
    return a;
}

a();  
   
2 Marks

Q.3 Crate a Function of Sum ?

const sum=(a,b)=>{
return a+b;
}
console.log(sum(5,9));

1Marks


3/20 Fail

const a = function(i,j){
    for(let i = 8; i <20; i++){
    for(let j = 20; j > 9;j--){
    console.log(j);
    }
    console.log(i);
    }
    return i,j;
}
a();

const a =1;

if(a==2){
    console.log("Correct Code");   
}else if(a<2){
    console.log("2 Is Small "); 
}else{
    console.log("Wrong Code");   
}


const a = 89;
const b = " ";

if(a==b){
    console.log("A Is Equal To B");
    
}else{
    console.log("A Is Not Equal To B");

}


const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good Morning";
} else if (time < 20) {
  greeting = "Good Day";
} else if(time < 30){
 greeting = "Good Evening"
} else{
 greeting = "Good Night";
}

console.log(greeting);



Q.30 Write A Function In Which Variable Create on This Function?

const a = function(a){
    return a;
}

console.log(a("Hello, world!")); // This will log "Hello, world!"

const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
  };
  
  const person1 = {
    firstName: "Sanidhya",
    lastName: "Dwivedi"
  };
  
  // Use the call() method to call fullName with person1 as the context
  console.log(person.fullName.call(person1, "Rajasthan", "Jaipur"));
  

function myDisplayer(some){
    console.log(some);   
}

function myCalculator(num1,num2){
    let sum = num1 + num2;
    return sum;
}

let result = myCalculator(90 , 90)
myDisplayer(result);

const person = {firstName:"Sanidhya", lastName:"Dwivedi"};

Object.preventExtensions(person);

let answer = Object.isExtensible(person);
console.log(answer);

Define an Object
const obj = {counter:0};

// Define Setters and Getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
console.log(obj.counter);


const a = 2;
const v = 5;
console.log(a+v);


let text = "";
let i = 0;
while(i < 10){
    text +="The Number Is " + i + "\n";
    i++;
}
console.log(text);


const a = function(i){
    for(let i = 0; i<10; i++){
        console.log(i);  
    }
    return 0;
}
a()


const numbers = [45,4,9,16,25,24];

let txt = "";
numbers.forEach(myFunction);
console.log(txt);

function myFunction(value,index,array){
    txt += value + "\n";
}


Home Made Iterable

function myNumbers(){
    let n = 0;
    return {
        next:function(){
         n+=10;
         return {value:n,done:false}   
        }
    };
}

// Create Iterable

const n = myNumbers();
n.next();//10
n.next();//20
n.next();//30
console.log(n.next().value);


function myDisplayer(some){
    console.log(some);  
}

function myFirst(){
myDisplayer("Hello");
}

function mySecond(){
myDisplayer("Goodbye");
}

myFirst();
mySecond();


function myDisplayer(something){
    console.log(something); 
} 

function myCalculator(num1,num2,myCallback){
    let sum = num1 +num2
    myCallback(sum)
}

myCalculator(5,5,myDisplayer)

myNumbers = { };

myNumbers[Symbol.iterator] = function(){
    let n = 0;
    let done = false;
    return {
        next() {
            n += 10;
            if (n > 100) { done = true }
            return { value: n, done: done }
        }
    };
}

let text = "";
for (const num of myNumbers) {
    text += num + '\n';
}

console.log(text);

Create An Array

const fruits = ["Banana","Orange","Apple","Mango"];

// Prevent Extensions
Object.preventExtensions(fruits);

// They Will Return False
let answer = Object.isExtensible(fruits);
console.log(answer);

console.log(myFunction(55));

function myFunction(a) {
    let power = 10;
    return a * power;
  }


let text = "Outside: " + typeof carName;
console.log(text);

function myFunction(){
    let carName = "Volvo";
    let text = "Inside: " + typeof carName + " " + carName;
    console.log(text);
}

myFunction();


const numbers = [2,4,6,8,10,12,14,16,18,20];

let text = "";
for(const x of numbers){
    text += x + "\n";
}
console.log(text);

const myNumbers = [4,1,-20,-7,5,9,-6,-8,12];

const posNumbers =  removeNeg(myNumbers, (x)=> x >=0);
console.log(posNumbers);

function removeNeg(numbers,callback){
    const myAray = [];
    for(const x of numbers){
        if(callback(x)) {
            myAray.push(x);
        }
    }
    return myAray;
}


function myDisplayer(some) { 
console.log(some); 
}

let myPromise = new Promise(function(myResolve,myReject){
    let x = 0;

    if(x == 0) {
        myResolve("OK");
    }else{
        myReject("Error");
    }
});

myPromise.then(
function(value) {myDisplayer(value)},
function(error) {myDisplayer(error)}
);


const points = [40,100,1,5,25,10];
console.log(myArrayMax(points));

function myArrayMax(arr){
    let len = arr.length;
    let max = -Infinity;
    while(len--){
        if(arr[len] > max){
            max = arr[len]
        }
    }
    return max;
}

const d = new Date();
d.setFullYear(2025);
console.log(d);


setInterval(myFunction,1000);

function myFunction(){
    let d = new Date();
    console.log(d.getHours(), ":",d.getMinutes(), "(",d.getSeconds(), ")");
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>" + "\n";
}
text += "</ul>";
console.log(text);

let x = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

for (let i in myObj.cars) {
  x += "<h2>" + myObj.cars[i].name + "</h2>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] +  "\n";
  }
}

console.log(x);

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);


const numbers = [45,4,9,16,25];
let sum = numbers.reduceRight(myFunction);

console.log(`The Sum Is: ${sum}`);

function myFunction(total,value,index,array){
    return total+value;
}

const fruits = ["Banana","Orange","Papaya","Watermelon","Apple","Mango"];
const f = fruits.entries();

for(let x of f){
    console.log(x,"\n");
}

const numbers = [45,49,99,168,25];
let someOver18 = numbers.some(myFunction);

console.log(`Some Over 18 Is: ${someOver18}`);

function myFunction(value,index, array){
    return value < 18;
}


const cars = ["Saab", "Volvo", "BMW"];

cars[0] = "Toyota";

cars.push("Volvo");
console.log(cars);




