//   let  obj = {name:"Qasim",city:"BPL",contact:123}
//    console.log(obj);


// let emp = {emp_name:"saksham",emp_surname:"nayak",emp_address:"pipariya"}
// console.log(emp);

// agar perticular eak he cheez print karana ho to
// console.log(emp.emp_surname); 
// . dot ko    axis member operator     bolta h





// // NESTED OBJECT = OBJECT K ANDAR OBJECT
// let obj = {name:"samarth",
//           brother:"rishu",
//           sister:"samraddhi",
        
//         him_account:{
//             balance:200,                                  
//             address:"pari bazar"
//         }
//         }
//         console.log(obj.him_account.address)              // . dot ko    axis member operator     bolta h-----use karta rahaga














// OBJECT KA CONTENT USER SA FORM ME OUTPUT KARANA

// function savedata(){
//     let name = document.querySelector('#name').value
//     let age = document.querySelector('#age').value
//     let contact = document.querySelector('#contact').value

//     let person ={
//         pr_name : name,
//         pr_age : age,
//         pr_contact : contact,
//     }
//     console.log(person);
//      return false
// }


// function savedata(){
//     let name = document.querySelector('#name').value
//     let age = document.querySelector('#age').value
//     let contact = document.querySelector('#contact').value

//     let person={
//         pr_name : name,
//         pr_age : age,
//         pr_contact : contact,
//     }
//     console.log(person);
//     return false;
// };




function savedata(){
    let person = {
        name : document.querySelector('#name').value,
        age : document.querySelector('#age').value,
        contact : document.querySelector('#contact').value
    }
    console.log(person);
    return false;
};