async function getData() {
  const res = await fetch(`http://localhost:4008/api/get`);
  const data = await res.json();
  console.log(data);
  let str = ``;
  data.map((dt) => {
    str += `<div class="movie">
                          <div class="cardimagel">
                             <a href="./pages/secondpage.html?id=${dt._id}"> <img src="${dt.profile}" alt="Maharaja" height="100%"></a>
                          </div>
                           
                            <div class="movie-details">
                               
                                <div class="movie-title">${dt.name}</div>
                                <div class="movie-info">${dt.category}</div>
                            </div>
                        </div>
                         </a>`
  });
  document.getElementById("movies").innerHTML=str
}
getData()


async function getUser(){
  const token=localStorage.getItem('userToken')
  console.log(token);
  const res=await fetch('http://localhost:4008/api/home',{
    method:"POST",
    headers:{"authorization":`Bearer ${token}`}
  })
  if(res.status==200){
    const user=await res.json()
    console.log(user);
    document.getElementById("user").innerHTML=user.username
  }
  else{
    alert("please login")
  }
}
getUser()