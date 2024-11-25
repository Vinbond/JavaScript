// //creating Object
// const obj={
//     name:"kkk",//separeted with comma
//     age:23,
//     satrt(){
//         console.log("Started");
//     }

// }
// //accuring properties parent to child lets try
// //use __proto__ 
// const karan={
//     salary:3000
// }
// karan.__proto__=obj;//now karan object hav satart method

//===========>>>>>>>>>>Classes in javascript
// class student{
//     start(){
// console.log("started");

//     }
// stope(){
//     console.log("stope")
// }
// setValues(value){
//     this.vvv=value;
// }
// };
// let obj1=new student();
// //To set values 
// obj1.setValues("This is the first value");
// console.log(obj1.vvv);
// let obj2=new student();

// obj2.setValues("This is the Second value");
// console.log(obj2.vvv);
//=======>>>>>>>>>>>>Constructor=======>>>>>>>
// class parent{
//     // constructor(){
//     //     console.log(" The is the Parent Constructor ");
//     // }
//     constructor(brand){ //if we are not providing any value of it it does`t give error
//          this.brandName=brand;

//     }
// };
// let obj1P=new parent("car");
// console.log(obj1P);
// // console.log(obj1P);
//============>>>>>>>>>>Inheritance in Javascript=======>>>>>>>
// class Parent{
//     start(){
//         console.log("Started");

//     }
//     stope(){
//         console.log("Stopped")
//     }
// }
// class child extends Parent {

// }
// let obj=new child();
// console.log(obj.start());
// console.log(obj.stope());
//========>>>>>>>>>>>>>>>>>>>Super Key word in JavaScript===============>>>>>>>
//******The Super Keyword is used to call the parent class constructor if child class access the properties and method from the 
//Parent class  
// class parent{
//     constructor(){
//         console.log("Enter parent class constructo")
       
//     }
// };
// class child extends parent{
   
//     constructor(brand2){
//         super();//super keyword it should bi in below chid class constructor

//         this.bbb=brand2;
        
//         console.log(" This is Child class constructor ")
//     }
// }
// let cc=new child("Toyota");
// console.log(cc.bbb)
//==========>>>>>>>>>>>>>passing arguments in Super key word =========>>>>>>>>>>>>>>>>>>>>
// class First{
//     constructor(name){
//         this.name=name;
//         console.log("First constructor")
//     }
// };
// class Second extends First{
//     constructor(name){
//         super(name);
//         console.log("Second constructor");
//     }

// }
// let obj=new Second("Vinayak");
//================>>>>>>>>>>>>>>>>>>>>>ERROR HANDLING IN JAVASCRIPT===========>>>>>>>>>>>>>>>>
// let a=10;
// let b=5;
// console.log(a+b);
// console.log(a-b);
// //console.log(a+c);c is not defined
// try{
//     console.log(a+c);
// }catch(err){
//     console.log(err);
// }
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);



