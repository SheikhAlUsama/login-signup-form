var loginText = document.querySelector(".title-text .login");
var loginForm = document.querySelector("form.login");
var loginBtn = document.querySelector("label.login");
var signupBtn = document.querySelector("label.signup");
var signupLink = document.querySelector("form .signup-link a");



    signupBtn.onclick = (()=>{
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      });
      loginBtn.onclick = (()=>{
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      });
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});
function signup(){

        var name = document.getElementById('email');
        var password = document.getElementById('password');
        var email_validator_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;
        
        
    
        if(name.value.length == 0){
            alert('Please fill in email');
    
        }
        else if (password != confirmPassword){

            alert('Enter Same pasword');
        }
        else if(password.value.length == 0 || password.value.length < 8 ){
            alert('Password minimum leght will be 8 with 1 Uppercase letter and 1 number atleast');
    
        }else if(password.value.length == 0){
            alert('Password Min lenght will be 8');
    
      
    
        }else if(!password.value.match(numbers)){
            alert('please use atleast one number');
    
        }else if(!password.value.match(upperCaseLetters)){
            alert('please use atleast one uppercase letter');
    
        }else if(!password.value.match(lowerCaseLetters)){
            alert('please use atleast one lovercase letter');
    
        }else if (!name.value.match(email_validator_regex)){
            alert("Please fill Correct Email")
        }
        else{
            localStorage.setItem("name", name.value);
            localStorage.setItem("password", password.value);
            alert('Your account has been created');
        
    
        }
    
}

function login(){
    var checkEmail=document.getElementById("checkEmail");
    var checkPassword=document.getElementById("checkPassword");

    var email = localStorage.getItem("name");
    var paswordSave = localStorage.getItem("password");

    if(checkEmail.value == email && checkPassword.value == paswordSave){
        window.location.href = "home.html"

    }
    else {
        alert("Email or Password is imcorrect")
    }
}
function logout(){
    window.location.href ="index.html";
}