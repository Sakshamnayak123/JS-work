 // SWAPING OF TWO NUMBER

 let a = parseInt(prompt("a="))
let b = parseInt(prompt("b="))

console.log ("before swaping");
console.log ("a=",a)                             
console.log ("b=",b)

let c=a;
a=b;
b=c;

console.log("after swaping");
console.log("a=",a);
console.log("b=",b);


//if/else

let num = parseInt(prompt("num"))
if(num%2==0){
    console.log("even")
}
else{
    console.log("odd")
}

// 
let age = parseInt(prompt("age"))
if(age>=18){
    console.log("Eligible to vote")
}
else{
    console.log("not elagible")
}