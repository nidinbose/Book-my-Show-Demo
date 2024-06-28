
const url=window.location.href
const search = new URLSearchParams(url.split('?')[1])   
const id=search.get('id');
console.log(id);






async function getforedit() {
    
    const res =await fetch(`http://localhost:4008/api/getforedit/${id}`)
    const data  = await res.json()
   let str =``;

    str=`   <div class="edit" id="v3">
            <img src="" alt=""  style="width: 100%;">


             <div class="bagp">
                <img src="${data.profile}" alt="">
             </div>

             <div class="fnt2">
              <h1>${data.name}</h1>
              <p><span>★</span> ${data.Likes}<button>rate now</button> </p>
              <span>2D,IMAX 2D,IMAX 3D ,3D</span>
              <span>Englis hindi Tamil</span>

              <h3>${data.category}</h3>


                <div class="b">
                  <a href="../pages/edit.html?id=${data._id}"><button class="book-button">Edit</button></a>
                
                  <button class="book-button" onclick="deletemovie('${data._id}')">Delete</button>
                </div>

             </div>

          </div>
       
    `

   
    
    

document.getElementById('edit').innerHTML=str



}

getforedit()




async function deletemovie(id) {
  // console.log(id);
    try {
        const res = await fetch(`http://localhost:4008/api/delete/${id}`, {
            method: 'DELETE',
        });
        console.log(res);
        if(res.status==200){
          const data = await res.json();
          alert(data.msg);
        window.location.href="../index.html"
        }
        
    } catch (error) {
        console.error(error);
        
    }
}