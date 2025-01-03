
// Practice Questions

// Q.1 Write The Number Is 2 And  From 2 To 11 Prints  The Numbers? 1 Marks

// let txt = "";

// for(let i = 2 ; i < 12 ; i++){
//     txt+= "The Numbers Is : " + i;       // 1
// }

// console.log(txt);

// Q.2   Write A Number  Which is 20 and 90 . It Is Swap is 90 And 20 ? 9 Marks

// let a = 20;
// let b = 90;

// console.log(`Before Swapping a: ${a}`);
// console.log(`Before Swapping b: ${b}`);
                                               // 9

// [b,a]=[a,b];

// console.log(`After Swapping a:${a}`);
// console.log(`After Swapping b:${b}`);

// Q.3 Write A Fruits And Sort The Fruits?  2 Marks

// const fruits = ["Banana","Orange","Apple","Mango","Papaya"];
// console.log(fruits);

// fruits.sort();      2
// console.log(fruits);

// Q.4 Write A Person Name,Age,MobileNo. Fname,Mname In Object? 4 Marks


// const person = {
//     FirstName:"Sanidhya",
//     LastName:"Dwivedi",
//     age:19,
//     MobileNo:9216393256,
//     Fname:"Ravi Dwivedi",
//     Mname:"Shuchi Dwivedi",
//     display:function(){
//         console.log(this.FirstName,this.LastName,this.age,this.MobileNo,this.Fname,this.Mname);
        
//     }
// };

// let display = person.display.bind(person);
// setTimeout(display,9000);

//4

// Q.5 Write A Function Sum And Add The Two Numbers? 1 Marks

// function sum(a,b){
//     return a+b  
// }

// console.log(sum(9,5));


// Q.6 Write A If And Else Conditions In A  Gretting? 20 Marks

// const time = new Date().getHours();
// let greeting;

// if (time < 10) {
//   greeting = "Good Morning";
// } else if (time < 18) {  
//   greeting = "Good Day";
// } else if (time < 22) {  
//   greeting = "Good Evening";
// } else {
//   greeting = "Good Night";
// }

// console.log(greeting);

// 37 / 40

// const func = function(a, b) {
//     a = b;
//     b = a;

//     for (let a = 8; a < 12; a++) {
//         console.log(a);  
//     }

//     for (let b = 1; b < 8; b++) {
//         console.log(b);
//     }
// }

// func(5, 10);  

// console.log('This is the outer "a":', 5);  

// const a  =7;
// console.log(a);

// Test

// Q.1 Write A Number In Which Loop Begin  With 2 And Ends The 52?

// for(let i = 2; i<53; i++){
//     console.log(i);
    
// }

// Q.2 Write A Person firstName,lastName,Age, City ,Mobile.No And Email In JSON.Strigify Form ?

// const person = {
//     firstName:"Sanidhya",
//     lastName:"Dwivedi",
//     age:19,
//     city:"Jaipur",
//     MobileNo:9216393256,
//     Email:"DwivediSanidhya4@Gmail.com"
// };

// const personString = JSON.stringify(person);
// console.log(personString);


// Q.3 Write A Number In Which Loop Begins With 2 And With 60 .Write The For-Loop?

// for(let i = 2; i<61;i++){
//     console.log(i);
// }

// const a = function(a) {

// for(let a=1;a<8;a++){
// console.log(a);

//  }
//  return a;
// }
// a();

// const a= 89;
// const b = function(v){
//     if(a==89){
//         console.log("Correct Code");
        
//     }else{
//         console.log("Wrong Code");
        
//     }
// }

// b();

// const a =2
// console.log(a*a);

// const e = 81;
// const v = 78;
// const y = e - v;
// console.log(y);

// const a =87;
// console.log(a);

// let a =true;
// let b =false;
// let c =a-b;
// console.log(c);


// const x = new Boolean(false);
// const y = new Boolean(false);
// console.log(x===y);

// Practice Question

//  Q.1 Write a variable and create a function on this variable?

// const a = function(x) {
//     if (x <= 0) {
//         return 0;
//     }
//     return x + a(x - 1); 
// }

// console.log(a(5));  -1 Marks

// Q.2 Write a variable and create a for-loop on this variable and return the variable name?

// const a = function(a){
//     for(let a = 5; a<13; a++){
//         console.log(a);      
//     }
//     return a;
// }

// a();  
   
//2 Marks

// Q.3 Crate a Function of Sum ?

// const sum=(a,b)=>{
// return a+b;
// }
// console.log(sum(5,9));

// 1Marks


//3/20 Fail
