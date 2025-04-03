
let fetchData = async()=>{

let url="http://localhost:3000/hotel"

let res=await fetch(url,{method:"GET"})

    let data= await res.json()
    console.log(data);

    let show=document.querySelector("#dataShow")

    data.map((e)=>{
           
        show.innerHTML+=
        <tr>
            <td>${e.name}</td>
            <td>${e.age}</td>
        </tr>
    })
}

fetchData()