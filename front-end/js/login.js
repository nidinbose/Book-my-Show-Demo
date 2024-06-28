var overlay = document.getElementById("overlay");

var openSignUpButton = document.getElementById("slide-left-button");
var openSignInButton = document.getElementById("slide-right-button");

var leftText = document.getElementById("sign-in");
var rightText = document.getElementById("sign-up");

var accountForm = document.getElementById("sign-in-info")
var signinForm = document.getElementById("sign-up-info");

openSignUp = () =>{
    leftText.classList.remove("overlay-text-left-animation-out");
  overlay.classList.remove("open-sign-in");
  rightText.classList.remove("overlay-text-right-animation");
  accountForm.className += " form-left-slide-out"
  rightText.className += " overlay-text-right-animation-out";
  overlay.className += " open-sign-up";
  leftText.className += " overlay-text-left-animation";
  

  setTimeout(function(){
    accountForm.classList.remove("form-left-slide-in");
    accountForm.style.display = "none";
    accountForm.classList.remove("form-left-slide-out");
  }, 700);
  

  setTimeout(function(){
    signinForm.style.display = "flex";
    signinForm.classList += " form-right-slide-in";
  }, 200);
}


openSignIn = () =>{
 
  leftText.classList.remove("overlay-text-left-animation");
  overlay.classList.remove("open-sign-up");
  rightText.classList.remove("overlay-text-right-animation-out");

  signinForm.classList += " form-right-slide-out";
  leftText.className += " overlay-text-left-animation-out";
  overlay.className += " open-sign-in";
  rightText.className += " overlay-text-right-animation";

  setTimeout(function(){
    signinForm.classList.remove("form-right-slide-in")
    signinForm.style.display = "none";
    signinForm.classList.remove("form-right-slide-out")
  },700);

  setTimeout(function(){
    accountForm.style.display = "flex";
    accountForm.classList += " form-left-slide-in";
  },200);
}


openSignUpButton.addEventListener("click", openSignUp, false);
openSignInButton.addEventListener("click", openSignIn, false);







async function userRegister(){

    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    const cpassword=document.getElementById('cpassword').value;
    


    
    const res=await fetch('http://localhost:4008/api/user', {
      method: 'POST',
 
 headers: {'Content-Type': 'application/json'},
 
 body: JSON.stringify({username, password,cpassword})
 
 })

 if (res.status === 201){
 
     
     window.location.href='../pages/login.html'
     alert("account created");

 } else {
     alert("fields are empty or password not matched")
 }
 

 }






    async function userLogin(){

      const username=document.getElementById('lusername').value;
      const password=document.getElementById('lpassword').value;
      
  
  
      
      const res=await fetch('http://localhost:4008/api/login', {
           method: 'POST',
      
      headers: {'Content-Type': 'application/json'},
       
      body: JSON.stringify({ username, password })
      
      })
      if (res.status==200) {
        const data=await res.json()
        console.log(data.token);
        localStorage.setItem('userToken',data.token)
      window.location.href="../index.html" 
      } else {
        alert("can't sign in")
    }

      }