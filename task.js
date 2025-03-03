var count=0

function fun(){
    if(count<4){
        let inp = document.createElement('input')
        let body = document.body
        body.append(inp)
        count++
    }
    else{
           alert("no more")
    }
}