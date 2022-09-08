function validateSignInForm(e){
    e.preventDefault();

    // Set up message array
    let messages = new Array;

    // Get password and validate
    let pw=document.getElementById('inputPassword3').value;
    if(pw.trim().length<3){
        messages.push("Invalid Password");
    }

    // Get email address and validate
    let email=document.getElementById('inputEmail3').value;
    if(!ValidateEmail(email)){
        messages.push("Invalid Email");
    }

    // If no error messages show submit message
    let outputMessage = "";
    if(messages.length == 0){
        outputMessage = '<div class="alert alert-success" role="alert"><p>Login has been submitted</p></div>';
    }else{
    // Else show error messages
        outputMessage = '<div class="alert alert-danger" role="alert">';
        for(let i=0;i<messages.length;i++){
            outputMessage+='<p>'+messages[i]+"</p>";
        }
        outputMessage+="</div>";
    }

    document.getElementById('errorMessages').innerHTML = outputMessage;

}

function validateNewUserForm(e){
    e.preventDefault();

     // Set up message array
     let messages = new Array;

    // Get email address and validate
    let email=document.getElementById('inputEmail').value;
    if(!ValidateEmail(email)){
        messages.push("Invalid Email");
    }

    // Get passwords and validate
    let pw1=document.getElementById('inputPassword5').value;
    let pw2=document.getElementById('inputPassword4').value;
    if(pw1.trim().length<3 || pw2.trim().length<3 || pw1 != pw2){
        messages.push("Invalid Passwords - either too short or they do not match");
    }

    // Validate Names
    let fname=document.getElementById('inputFName').value;
    if(fname.trim().length < 3){
        messages.push("Invalid First Name");
    }
    let lname=document.getElementById('inputLName').value;
    if(fname.trim().length < 3){
        messages.push("Invalid Last Name");
    }

     // If no error messages show submit message
     let outputMessage = "";
     if(messages.length == 0){
         outputMessage = '<div class="alert alert-success" role="alert"><p>Login has been submitted</p></div>';
     }else{
     // Else show error messages
         outputMessage = '<div class="alert alert-danger" role="alert">';
         for(let i=0;i<messages.length;i++){
             outputMessage+='<p>'+messages[i]+"</p>";
         }
         outputMessage+="</div>";
     }
 
     document.getElementById('errorMessages').innerHTML = outputMessage;
}




function ValidateEmail(mail){
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
    return true;
  }else{
    return false;
  }
}

document.addEventListener('DOMContentLoaded', function(event) {

    jQuery('#relaxrExistingUser a').click(function (e) {
        e.preventDefault()
        jQuery(this).tab('show')
    });

    document.querySelector("#home .relaxrLoginForm").addEventListener('submit',validateSignInForm);

    document.querySelector("#profile .relaxrLoginForm").addEventListener('submit',validateNewUserForm);

});