// alert("hello");

function nameVlid() {
    // Name Validation Start
    var name = document.getElementById("name").value;

    
    // console.log (typeof name);
    if (name.trim() == "") {
        document.getElementById("Name").innerHTML =
            " ** Please fill the Name field";
        return false;
    }
    // else if(name = " ") {

    //  } 
    else {
        document.getElementById("Name").style = "display:none";
    }
    // Name Validation End
}
function emailVlid() {
    // Email Validation Start
    var emails = document.getElementById("emails").value;
    if (emails == "") {
        document.getElementById("emailids").innerHTML =
            " Please fill the email id field";
        return false;
    }
    else if (emails.indexOf("@") <= 0) {
        document.getElementById("emailids").innerHTML = " Invalid Email";
        return false;
    }

    else if (emails.charAte(emails.length - 4) != "." && emails.charAt(emails.length - 3) != ".") {
        document.getElementById("emailids").innerHTML = " Invalid Email";
        return false;
    }
    else {
        document.getElementById("emailids").style = "display:none";
        return true;
    }
    // Email Validation End
}

function userVlid() {
    // userName start
    var user = document.getElementById("user").value;
    if (user == "") {
        document.getElementById("username").innerHTML =
            " ** Please fill the username field";
        return false;
    }
    else if (user.length <= 3 || user.length > 20) {
        document.getElementById("username").innerHTML =
            " ** Username lenght must be between 3 and 20";
        return false;
    }
    else if (!isNaN(user)) {
        document.getElementById("username").innerHTML =
            " ** only characters are allowed";
        return false;
    } else {
        document.getElementById("username").style = "display:none";
    }

    
    // userName Validation End
}

function passVlid() {
    // Password Validation Start
    var pass = document.getElementById("pass").value.trim();
    var errpass = document.getElementById("passwords");
    var pass_number = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var pass_U_character = /^(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var pass_L_character = /^(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var special_charavter = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    if (pass == "" || pass == null) {

        errpass.innerHTML = " Please fill the password field";
    }
    else if (pass.length <= 6 || pass.length > 16) {
        errpass.innerHTML = "Passwords lenght must be between  6 and 16";
    }
    else if (!(pass_number.test(pass))) {
        errpass.innerHTML = "enter min one number ";
    }
    else if (!(pass_U_character.test(pass))) {
        errpass.innerHTML = "enter min one uppercase character ";

    } else if (!(pass_L_character.test(pass))) {
        errpass.innerHTML = "enter min one lowercase charater ";
    } else if (!(special_charavter.test(pass))) {
        errpass.innerHTML = "enter min one special character ";
    } else {
        errpass.innerText = "";
        return true;
    }
    return false;
    

}

function conpassVlid() {
    // Confirm Password Validation Start
    var confirmpass = document.getElementById("conpass").value;
    var pass = document.getElementById("pass").value;
    if (pass != confirmpass) {
        document.getElementById("confrmpass").innerHTML =
            " ** Password Mismatch";
        return false;
    }

    else if (confirmpass == "") {
        document.getElementById("confrmpass").innerHTML =
            " ** Please fill the confirmpassword field";
        return false;
    } else {
        document.getElementById("confrmpass").style = "display:none";
    }
    // Confirm Password Validation End 
}

function numberVlid() {
    // Mobile Number Validation Start
    var mobileNumber = document.getElementById("mobileNumber").value;
    if (mobileNumber == "") {
        document.getElementById("mobileno").innerHTML =
            " ** Please fill the mobile Number field";
        return false;
    }
    else if (isNaN(mobileNumber)) {
        document.getElementById("mobileno").innerHTML =
            " ** user must write digits only not characters";
        return false;
    }
    else if (mobileNumber.length != 10) {
        document.getElementById("mobileno").innerHTML =
            " ** Mobile Number must be 10 digits only";
        return false;
    } else {
        document.getElementById("mobileno").style = "display:none";
        return true;
    }
    // Mobile Number Validation End 
}



