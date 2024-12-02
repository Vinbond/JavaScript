//synchronous and Asynchronous, Callback,CallbackHell,promises,
// console.log("This is line No :1")
// console.log("This is line No :2")
// function hello(){
//     console.log("This is line No :3")
// }
// setTimeout(hello,4000)//timeout

// console.log("This is line No :4")
// console.log("This is line No :5")
const url="https://cat-fact.herokuapp.com/facts";
// let data=fetch(url);
// console.log(data);
// //console.log(data.status);
// let data1=data.json()
// console.log(data1);
let el=document.querySelector("#txt");
// console.log(el)
const getFacts=async ()=>{
    let response=await fetch(url);
    let data=await response.json()
    // console.log(data[0].text)
    // console.log(data[1].text)
    // console.log(data[2].text)
    // console.log(data[3].text)
    // console.log(data[4].text)
    el.innerText=data[0].text


}
getFacts()