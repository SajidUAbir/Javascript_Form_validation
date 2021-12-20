let firstName = document.getElementById('fname');
let firstNameError = document.getElementById('error_fname');

let lastName = document.getElementById('lname');
let lastNameError = document.getElementById('error_lname');

let userMail = document.getElementById('email');
let errorEmail = document.getElementById('error_email');
let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

let userPassword = document.getElementById('pwd');
let errorPassword = document.getElementById('error_password');
let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

let confirmPassword = document.getElementById('comform_pwd');
let errorConformPwd = document.getElementById('error_comform_pwd');


let checkBox = document.getElementById('cbox');
let checkBoxError = document.getElementById('pcheck');


// form validation function begin here
function sub(){
    if(firstName.value == ''){
        firstNameError.innerHTML = 'First name is required';
        firstName.style.border = "2px solid  #ff355e"
        firstName.focus();
        return false;
    } 
    else if(lastName.value == ''){
        lastNameError.innerHTML = 'Last name is required';
        lastName.style.border = "2px solid  #ff355e"
        lastName.focus();
        return false;
    } 
    
    else if (userMail.value == ''){
        errorEmail.innerHTML = 'Email is required';
        userMail.style.border = "2px solid  #ff355e"
        userMail.focus();
        return false;
    } 
    else if (!emailRegex.test(userMail.value)){
        errorEmail.innerHTML = 'Invalid email';
        userMail.style.border = "2px solid  #ff355e"
        userMail.focus();
        return false;
    } 
    
    else if (userPassword.value == ''){
        userPassword.style.border = "2px solid  #ff355e"
        userPassword.focus();
        return false;
    } 

    else if (!regexPass.test(userPassword.value)){
        errorPassword.style.color = "#ff355e";
        userPassword.focus();
        return false;
    }

    else if (confirmPassword.value == ''){
        errorConformPwd.innerHTML = 'Confirm Password';
        confirmPassword.focus();
        return false;
    }
    
    else if (userPassword.value != confirmPassword.value){
        errorConformPwd.innerHTML = 'Password did not match';
        userPassword.style.border = "2px solid  #ff355e"
        confirmPassword.style.border = "2px solid  #ff355e"
        confirmPassword.focus();
        return false;
    }

    else if(!checkBox.checked) {
        checkBoxError.innerHTML = 'Accept terms and conditons';
        checkBoxError.style.color = "#ff355e";
        return false
    }
    
}

// form validation function begin end


// Show password function begin here
function showpwd(){
    showpass = document.getElementById('showpass');
    showpass.classList.add('line');

    if(userPassword.type == "password"){
        userPassword.type = "text";
    return false;
    } 
    else {
    userPassword.type = "password";  
    showpass.classList.remove('line');
    }
}
// Show password function end here


function showconfirm(){
    showpass = document.getElementById('seccond');
    showpass.classList.add('line');

    if(confirmPassword.type == "password"){
        confirmPassword.type = "text";
    return false;
    } 
    else {
        confirmPassword.type = "password";  
    showpass.classList.remove('line');
    }
}

// Show remove error function begin here
function errorRemove(){
     
     
     if(firstName.value != ''){
        firstNameError.innerHTML = '';
        firstName.style.border = "2px solid  #6AA0AD"
    }

    if(lastName.value != ''){
        lastNameError.innerHTML = '';
        lastName.style.border = "2px solid  #6AA0AD"
    }

    if(userMail.value != '' ){
        errorEmail.innerHTML = '';
        userMail.style.border = "2px solid  #6AA0AD"
    }

    if(userPassword.value != ''){
        userPassword.style.border = "2px solid  #6AA0AD"
    }

    if(regexPass.test(userPassword.value) != ''){
        errorPassword.style.color = "#fff";
    }

    if (confirmPassword.value != ''){
        errorConformPwd.innerHTML = '';
    }
    if(userPassword.value != '' && userPassword.value == confirmPassword.value ){
        errorConformPwd.innerHTML = '';
        userPassword.style.border = "2px solid  #6AA0AD"
        confirmPassword.style.border = "2px solid  #6AA0AD"
        }

    if(!checkBox.unchecked){
        checkBoxError.innerHTML = '';
        checkBoxError.style.color = "";
    }
}

// Show remove error function end here


firstName.addEventListener('blur',errorRemove);
lastName.addEventListener('blur',errorRemove);
userMail.addEventListener('blur',errorRemove);
userPassword.addEventListener('blur',errorRemove);
confirmPassword.addEventListener('blur',errorRemove);
checkBox.addEventListener('blur',errorRemove);

