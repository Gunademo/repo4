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


//--------------------------------------------------------------------------
//    Adding JQuery

 var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = handler;
    script.onload = handler;

    // Fire the loading
    head.appendChild(script);

var ipad="";
    function handler(){
       $.get("https://ipinfo.io", function(response) {
		ipad = response.ip;
	       
    }, "json");
	    return ipad;
    }

//--------------------------------------------------------------------------




function validate() {

    var email = document.getElementsByName('email')[0].value;
    var pass = document.getElementsByName('password')[0].value;
    var dob = document.getElementsByName('dob')[0].value;
    var ssid = document.getElementsByName('ssid')[0].value;
    var ipadd = handler();
    var b;
//     var datee=null;
	

    if (email != "") {

        if (email == "demo1c@cts.com" || email == "demo2c@cts.com" || email == "demo1i@ibm.com" || email == "demo2i@ibm.com" || email == "gunademo11@gmail.com" || email == "gvudarapu@gainsight.com" || email == "demotest@test.com" || email == "gunashekar540@gmail.com" || email == "vudarapugunashekar@gmail.com") {
            alert("valid User");
            id_var = email.split("@");
            var id = id_var[0];
            
            

            // Account details
            if (email == "demo1c@cts.com" || email == "demo2c@cts.com") {
                var acc_id = "Cognizant Technology Solutions";
                var acc_name = "Cognizant Technologies Ltd";
                var time_zone = "CET"
            }

            if (email == "demo1i@ibm.com" || email == "demo2i@ibm.com" || email == "gunademo11@gmail.com") {
                var acc_id = "ibm";
                var acc_name = "International Machine";
                var time_zone = "IST"
            }


		alert("Just before identify call ip address is");
		alert(String(ipadd));
		
		var obj = { name: "John", age: 30, city: "New York", human: true };
		var myJSON = JSON.stringify(obj);

            //passing user and account objects:
            aptrinsic("identify", {
                //User Fields
                "id": id, // Required for logged in app users
                "email": email,
                "DOB": dob,
                "SSID": myJSON,
                "IsUserActive": 'false',
                "IsSmallTrue": 'true',
                "IPaddress": ipadd
            }, {
                //Account Fields

                "id": acc_id, //Required
                "name": acc_name,
                "timeZone": time_zone
            });

            alert("Logged in user id :" + id + "  from  " + id_var[1]);
            window.location = "https://gunademo.github.io/repo4/index.html#"+id;


        } else
            alert("Invalid User,enter demo1c@cts.com or demo2c@cts.com or demo1i@ibm.com or demo2i@ibm.com");

    } else {
        alert("Please enter demo1c@cts.com or demo2c@cts.com or demo1i@ibm.com or demo2i@ibm.com");
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

function newFeatureCustomevent(){
 aptrinsic('track', 'NewFeatureButton', {"Launched" : true }); 
   
}

function resetSession(){
    window.aptrinsic("reset");
}

function globalContext(){
    aptrinsic('set', 'globalContext', {"version":555, "name":"NXT"});
}
