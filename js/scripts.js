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