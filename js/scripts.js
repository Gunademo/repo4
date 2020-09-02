(function(n, t, a, e) {
    var i = "aptrinsic";
    n[i] = n[i] || function() {
        (n[i].q = n[i].q || []).push(arguments)
    }, n[i].p = e;
    var r = t.createElement("script");
    r.async = !0, r.src = a + "?a=" + e;
    var c = t.getElementsByTagName("script")[0];
    c.parentNode.insertBefore(r, c)
})(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-RVUKE5ITK77K-2");


function validate() {

    var email = document.getElementsByName('email')[0].value;
    var pass = document.getElementsByName('password')[0].value;
    var b;

    if (email != "") {

        if (email == "demogs123@gmail.com" || email == "gunashekar540@gmail.com") {
            alert("valid User");
            b = email.substr(5, 5);
            var id = b;

            //passing user and account objects:
            aptrinsic("identify", {
                //User Fields
                "id": id, // Required for logged in app users
                "email": email

            });
            alert("Logged in user id :" + b);
            window.location = "https://gunademo.github.io/repo4/index.html";


        } else
            alert("Invalid User,enter \"demogs123@gmail.com\"");

    } else {
        alert("Please enter demogs123@gmail.com");
    }

    // if (email == "") {
    //     alert("Login in with demo@gs.com");
    // } else {
    //     if (email == "demo@gs.com") {
    //         location.replace("index.html");
    //     } else {
    //         alert("Email or password provided is incorrect");
    //     }
    // }

}