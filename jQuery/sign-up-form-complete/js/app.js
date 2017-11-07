//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//Hide hints
$('form span').hide();

function isPasswordValid() {
    return $password.val().length > 8;
}

function arePasswordMatching() {
    return $password.val() === $confirmPassword.val();
}

function canSubmit() {
    return isPasswordValid() && arePasswordMatching();
}

function passwordEvent() {
    //Find out if password is valid
    if(isPasswordValid()) {
        //Hide hint if valid
        $password.next().hide();
    } else {
        //else show hint
        $password.next().show();
    }
}

function confirmPasswordEvent() {
    //Find out if password and confirmation match
    if(arePasswordMatching()) {
        //Hide hint if match
        $confirmPassword.next().hide();
    } else {
        //Show the hint
        $confirmPassword.next().show();
    }        
}

function enableSubmitEvent() {
    $("#submit").prop("disabled", !canSubmit());
}


$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
    

//When event happends on password input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

enableSubmitEvent();





