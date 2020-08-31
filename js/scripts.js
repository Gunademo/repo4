function validate() {

    var email = document.getElementsByName('email')[0].value;
    var pass = document.getElementsByName('password')[0].value;

    if (email == "") {
        alert("Login in with demo@gs.com");
    } else {
        if (email == "demo@gs.com") {
            location.replace("index.html");
        } else {
            alert("Email or password provided is incorrect");
        }
    }

}