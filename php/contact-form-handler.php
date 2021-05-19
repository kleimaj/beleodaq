<?php
// Form Fields
    $name = $_POST['name'];
    $visitor_email=$_POST['email'];
    $phone=$_POST['phone'];
    $location=$_POST['location'];
    $subject=$_POST['subject'];
    $message=$_POST['message'];

    $email_from = 'jacobk@communicationpartners.com';

    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email\n".
                        "User Phone: $phone\n".
                            "User Location: $location\n".
                                "User Message: $message\n";
    
    $to = "jacobakleiman@gmail.com";
    $headers = "From : $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to, $subject, $email_body, $headers);

    header("Location: contact.html");

?>