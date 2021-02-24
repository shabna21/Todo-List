 function validate()
{
    var user = document.getElementById("username");
    var password = document.getElementById("password");
    var username = "admin";
    var pwd = "12345";   

    if(user.value===username && password.value===pwd){
       alert("successfully logged In"); 
        return true;
    }
    if(user.value == "" || password.value == ""){
        // alert("Fields cannt be empty");
        // Swal.fire("Fields cannot be empty");
        alert("username and password fields cannot be empty");
        return false;
    }
 if(user.value!=username){
     alert("invalid username or password");
     return false;
 }
 if(password.value!=username){
    alert("invalid username or password");
    return false;
}

 else{
     return false;
 }

}