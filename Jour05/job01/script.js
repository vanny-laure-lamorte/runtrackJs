$(document).ready(function() {

    // Connexion
    $("#login-btn").click(function(event) {
        event.preventDefault();

        EmailFormat($("#email").val())
        PasswordFormat($("#password").val())
        
    });

    // Inscription
    $("#register-btn").click(function(event) {
        event.preventDefault();
        FirstName($("#firstName").val())
        LastName($("#lastName").val())
        AddressFormat($("#address").val())
        PostcodeFormat($("#postcode").val())
        EmailFormat($("#email").val())
        PasswordFormat($("#password").val())

    });


    // Function check field
    function RedRect(id) {
            $(`input[id= "${id}"]`).css("border", "2px solid red");
            $(`input[id= "${id}"]`).css("box-shadow", "0 0 3px red");
        } 
       
    function ResetRect(id) {
        $(`input[id= "${id}"]`).css("border", "");
        $(`input[id= "${id}"]`).css("box-shadow", "");

    }

    function FirstName(firstName) {
        if (firstName === '') {
            RedRect("firstName")
            $("#FirstNameError").text("First Name cannot be empty").show() 
        }
        else if(firstName.length < 3) {
            $("#FirstNameError").text("First name must be at least 3 characters").show();
        } else {
            ResetRect("firstName")
            $("#FirstNameError").hide();
        }
    }

    function LastName(lastName) {
        if (lastName === '') {
            RedRect("lastName")
            $("#LastNameError").text("Last Name cannot be empty").show() 
        }
        else if(lastName.length < 3) {
            $("#LastNameError").text("Last name must be at least 3 characters").show();
        } else {
            ResetRect("lastName")
            $("#LastNameError").hide();
        }
    }

    function AddressFormat(address) {
        if (address === '') {
            RedRect("address")
            $("#AddressError").text("Address cannot be empty").show() 
        }
        else if (address.length < 5) {
            $("#AddressError").text("Invalid address format").show();
        } else {
            ResetRect("address")
            $("#AddressError").hide();
        }
    }

    function PostcodeFormat(postcode) {
        if (postcode === '') {
            RedRect("postcode")
            $("#PostcodeError").text("Postcode cannot be empty").show() 
        }
        else if (postcode.length < 5) {
            $("#PostcodeError").text("Invalid postcode format").show();
        } else {
            ResetRect("postcode")
            $("#PostcodeError").hide();
        }
    }

    function EmailFormat(email) {

        if (email === '') {
            RedRect("email")
            $("#EmailError").text("Email cannot be empty").show() 
        }
        else if (!email.includes("@") || !email.includes('.')) {
            $("#EmailError").text("Invalid email format").show();
            
        } else {
            ResetRect("email")
            $("#EmailError").hide();
        }
    }

    function PasswordFormat(password) {
        if (password === '') {
            RedRect("password")
            $("#PasswordError").text("Password cannot be empty").show() 
        }

        else if (
            password.length < 15 || 
            password.search(/[a-z]/) < 0|| 
            password.search(/[A-Z]/) < 0|| 
            password.search(/[0-9]/) < 0||
            password.search (/[!@#$%^&*]/) <0){
            RedRect("password");
            $("#PasswordError").text("Password must be minimum 15 characters and containts at least 1 lower letter, 1 upper letter, 1 number and 1 special symbol").show(); 
        } 
        else {
            ResetRect("password")
            $("#PasswordError").hide();
        }
    }
});
