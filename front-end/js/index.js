async function getData() {
  const res = await fetch(`http://localhost:4008/api/get`);
  const data = await res.json();
  console.log(data);
  let str = ``;
  data.map((dt) => {
    str += `<a href="./pages/secondpage.html?id=${dt._id}"><div class="movie">
                          <div class="cardimage">
                              <img src="${dt.profile}" alt="Maharaja" height="100%">
                          </div>
                           
                            <div class="movie-details">
                                <div class="rating">
                                    <span class="star">★</span>
                                    ${dt.Likes} Votes
                                </div>
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