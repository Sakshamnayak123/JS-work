// let count=0;
// function fun(){
//     let n=document.querySelector("#num")
//     setInterval(()=>{n.innerHTML=count++},500)
// }

let st;
let nu=0;
function dum(){
    let n=document.querySelector("#new")
    st = setInterval(()=>{n.innerHTML=nu++},500)
}
function stp(){
    clearInterval(st)    
}