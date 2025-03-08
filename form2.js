function validata(){
    let name =document.querySelector('#name').value
    let email =document.querySelector('#email').value
    let age =document.querySelector('#age').value

    if(name==""){
        let ero =document.querySelector('#errorname')
        ero.innerHTML="please entername"
        document.querySelector('#name').focus()
        return false

    }
    else  if(email==""){
        alert("Enter your Email")
        document.querySelector('#email').focus()
        return false
    }

    else  if(email==""){
        alert("Enter your Email")
        document.querySelector('#email').focus()
        return false
    }
}