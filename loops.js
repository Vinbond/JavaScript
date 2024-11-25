// let num=1;
// for(let num=1;num<=10;num++){
//     document.write("hello Jaascript ");
// }document.writeln(" ")
// let sum=0;
// for(let i=1;i<=100;i++){
//     sum=sum+i;//sum is 0 after first round the sum is become "1"
//     //second round sum=1 "=sum=sum+2nd round=sum=3"


// }document.writeln(sum);
// document.writeln("The loop is ended");
//@@@@@@@@@@@@infinte loop is danger//
// for(let i=1;i>=0;i++){
//     document.writeln(i);
// }never ending this loop system will crash

//******while loop******** */
// let i=0;//intitalizing
// while(i<=10){//condition
// document.writeln(i);
// i++;//increament/decreament

// }
/*************do while loop****** */
// let i=1;
// do{
//     document.writeln(i);
//     i++;

// }while(i<=20);
/**  For of loop */// this helps us to itarate on data types like string or array
// let name="1234567891011121314151617181920";
// let size=0;
// for (let i of name){//iterotor
//     console.log(i);
//     size++;
// }
// console.log("string size",size);
// let arr=[1233444,123334];
//  let size=0;
//  for(let val of arr){
//     document.writeln(arr);
//     //size++;
//  }
/**********for in loop  it can be used both arrays and objects */
//create a object and iterate over on it
// let info={
//     name:"vinayak",
//     age:29,
//     higheist_qualification:"MCA",
//     University:"Osmaniya University"
// }
// for(let key in info){
//     console.log("key is =",key,"Value=",info[key]);
// }
//qustions ====================>>>>>>>>>>>>>
//1st================>>>>>>print the all even numbers 0 to 100
// let num=0;
// for(let i=0;i<=100;i++){
//    if(i%2==0){
//     console.log("The Even num are",i);
//    }
    
// }
// 
// let num=25;
// let game=prompt("Enyer the game number");
// if(num==game){
//     document.writeln("Correct number");
// }else{
//     document.writeln("Wrong number Enter the correct number");
// }
////NOTE ====>whenever we recieve data from prompt the prompt will gives allways "string" type data  
//so we need to care full that
// let gamenum=25;
// let username=prompt("enter the game number");
// while(username!=gamenum){
//     username=prompt(" Enter the Correct number");

// }
// document.writeln("Correct number congratulations");
//Question 1==========>>>>>>
// let num=prompt("enter the numbers");
// let num2=prompt("Enter the num2");
// if(num2=num){
//     num3=prompt("enter your second number");
//     if(num2<=num3){
//       console.log("Second number is greter than first");  

//     }else{
//         console.log("First number is greater than second number"); 
//     }
    

// document.writeln("You entred number is =",num);
//}
// if(num<num2||num2>num){
//   console.log()
// }
// let a=prompt("Enter a number");
// let b=prompt("enter b number");
// if(a>b||b>a){
//   alert("B is greater than A");
// }else{
//   alert("A is greater than B");
// }
// let x=promt("Enter x value");
// let y=promt("Enter y value");
// if(x>y||x>=y){
//   console.log("x is greater than y");
// }else if(y>x||y>=x){
//   console.log("Y is greater than x");

// }else{
//   console.log("both are equal")

// }
// let arr=[100,200,300,400,500];
// //let i=0;
// // // do{
// // //   console.log("the indexes are =",i,"the valvues are ",arr[i])
// // //   i++;
// // // }while(i<arr.length);
// // while(i<arr.length){
// //   document.writeln(`the indexes are ${i} the valvues are ${arr[i]}`);
// //   i++;
// // }
// for(let count=0;count<arr.length;count++){
// //   console.log(arr[count]);
// let x=-2;
// let y=0;
// let z=-1;
// //print the decreasing order
// if(x>y && y>z){
//   console.log(x,+y,+z);
// }else if(x>z&&z>y){
//   console.log(x,+z,+y);
// }else if(y>z&&z>x){
//   console.log(y,+z,+x);
// }else if(y>x && x>z){
//   console.log(y,+x,+z);
// }else if(z>x&& x>y){
//   console.log(z,+x,+y);
// }else if(z>y&&y>x){
//   console.log(z,+y,+x);
// }else{
//   console.log("none===========>>>>>>>>")
// } succesfully done////=====================>>>>>>>>>>
// find the largest number of given five numbers
// let v=100; 
// let w=200; 
// let x=300; 
// let y=9990; 
// let z=49000;
// if(v>w&&v>x&&v>y&&v>z){
//     console.log("the value of v is =",v);
// }else if(w>v&&w>x&&w>y&&w>z){
//     console.log("the value of w is =",w);
// }else if(x>v&&x>w&&x>y&&x>z){
//     console.log("the value of x is =",x);
// }else if(y>v&&y>w&&y>x&&y>z){
//     console.log("the value of y is =",y);
// }else if(z>v&&z>w&&z>x&&z>y){
//     console.log("the value of z is =",z);
// }




























