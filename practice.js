//========>>>question============>>>>>>>>>>>
//1iterate 1 TO 100, multiple 3 print "FUZZ" and multiple of 5 print "BUZZ", if both multiples print "FUZZBUZZ"
// let x=0;
// for(let x=0;x<=100;x++){
//     if(x/3){
//         document.writeln("FUZZ");

//     }else if(x/5){
//         document.writeln("BUZZ");
//     }
// }
//create a button use the event mouseover when hover on button the baody color shu change use only js
// let btn=document.createElement("button");
// btn.innerText="Click me!!!!";
// let bb=document.querySelector("body");
// let dv=document.querySelector("div");
// dv.prepend(btn);
// dv.append(btn);first place in the div
// dv.after(btn);
// dv.before(btn)
// console.log(btn);
// let bbb=document.querySelector("button");
// console.log(bbb)
// bbb.addEventListener("click",()=>{





// });

// btn.addEventListener("click",()=>{
//     let vr="white";
// if(vr=="white"){
//     vr="black";
// }else{
//     vr="white";
// }
// console.log(vr);

// });

// var num=parseInt(prompt("First Number :"))
// var num2=parseInt(prompt("Second Number :"))
// var sum=parseInt(prompt("Operator"))
// if (sum =="+"){
//     console.log(num+num2);
// }elseif(sum =="-")
// {
//     console.log(num-num2);
// }elseif(sum =="/")
// {
//     console.log(num/num2)
// }elseif(sum=="*")
// {
//     console.log(num*num2)
// }
// console.log("Hello Wel come")
// var x=[1,4,5,0,34]
//x=x=parseInt(prompt("Enter the array"))
// console.log(x)
// const URL="https://api.thecatapi.com/v1/images/search?limit=10";
// let i=document.querySelector("img");
// const call_api=async ()=>{
//     let dt= await fetch(URL);
//     // let main_Data=(await dt).json();
//     let main_Data=await dt.json()
//         //  i.innerText=main_Data;
//         console.log(main_Data)
//         // i.src="https://cdn2.thecatapi.com/images/3eo.jpg"

// }
// call_api()
// console.log(i)
//@@@@@@@@@@@@@@@@@@Calculator@@@@@@@@@@@@@@@@@

// function kal(){
//     let d=document.getElementById("in").value;
//     let f=document.getElementById("ind").value;
//     let e=document.querySelector("h1")
//     // let l=document.querySelector("h1")
//      let num1=parseInt(d);
//      let num2=parseInt(f)
//      let result=num1+num2;
//     e.innerText=result;
//     e.innerText=result;
//     console.log(typeof(d))
//     console.log(typeof(f))
//    }
function plus(){
    let d=document.getElementById("in").value;
    let f=document.getElementById("ind").value;
    let e=document.querySelector("h1")
    let num1=parseInt(d);
     let num2=parseInt(f)
     let result=num1+num2;
    e.innerText=result;
    e.innerText=result;
    console.log(typeof(num1))
    console.log(typeof(num2))
}
function minus(){
    let d=document.getElementById("in").value;
    let f=document.getElementById("ind").value;
    let e=document.querySelector("h1")
    let num1=parseInt(d);
     let num2=parseInt(f)
     let result=num1-num2;
    e.innerText=result;
    e.innerText=result;

}
function multi(){
    let d=document.getElementById("in").value;
    let f=document.getElementById("ind").value;
    let e=document.querySelector("h1")
    let num1=parseInt(d);
     let num2=parseInt(f)
     let result=num1*num2;
    e.innerText=result;
    e.innerText=result;

}
function devid(){
    let d=document.getElementById("in").value;
    let f=document.getElementById("ind").value;
    let e=document.querySelector("h1")
    let num1=parseInt(d);
     let num2=parseInt(f)
     let result=num1/num2;
    e.innerText=result;
    e.innerText=result;

}






 