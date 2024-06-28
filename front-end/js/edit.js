// const { log } = require("npmlog");

const url=window.location.href
const search = new URLSearchParams(url.split('?')[1])
const id=search.get('id');


async function getdataforedit() {
    const res =await fetch(`http://localhost:4008/api/getforedit/${id}`)
    const data  = await res.json()
   
    document.getElementById('name').value=data.name
    document.getElementById('category').value=data.category
    document.getElementById('Likes').value=data.Likes
    document.getElementById('img').src=data.profile
    
}
getdataforedit()


async function updatemovie() {
    const name=document.getElementById('name').value;
  const category=  document.getElementById('category').value;
  const Likes =   document.getElementById('Likes').value;
 

const res=await fetch(`http://localhost:4008/api/update/${id}`,{
method:"PATCH",
headers:{"content-Type":"application/json"},
body:JSON.stringify({name,category,Likes})

})
if( res.status==201){
    const data=await res.json()
    alert(data.msg)
    window.location.href='../pages/secondpage.html'
}

}