<?php

    if(isset($_POST['submit'])){

        $to = "gunademo11@gmail.com"
        $subject = $_POST['subject'];
        $email = $_POST['email'];
        $txt = $_POST['message'];
        $headers = "From: " .$email . "\r\n".
        "CC: xyz@email.com";

        mail($to,$subject,$txt,$headers);

        header("Location: contact.html");

        
    }



?>