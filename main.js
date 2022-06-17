let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let mail = document.getElementById("mail")
let password = document.getElementById("password")

butt.addEventListener("click", function(){
    val()
})

function val(){
 if(firstName.value == "" || firstName.value == null){
     firstName.nextElementSibling.innerHTML="first name is required"
 
    }else{
        firstName.nextElementSibling=""
    
    }if(lastName.value == "" || lastName.value == null){
        lastName.nextElementSibling.innerHTML ="last name is required"
    }else{
        lastName.nextElementSibling.innerHTML=""
   
    }if (mail.value == "" || mail.value == null){
        mail.nextElementSibling.innerHTML ="mail is required"

    }else{
        mail.nextElementSibling.innerHTML=""

    }if(password.value == "" || password.value == null){
        password.nextElementSibling.innerHTML="password is required"
   
    }else{
        password.nextElementSibling.innerHTML=""
    }
}
