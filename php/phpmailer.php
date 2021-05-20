<!-- references 
PHPmailer example
https://stackoverflow.com/questions/59746993/phpmailer-with-html-contact-form 
Tutorial
https://www.sitepoint.com/sending-emails-php-phpmailer/
-->
<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require_once "../vendor/autoload.php";

    //PHPMailer Object
    $mail = new PHPMailer(true); //Argument true in constructor enables exceptions
    
    //Get Values from Post Request
    $name = $_POST['name'];
    $visitor_email=$_POST['email'];
    $phone=$_POST['phone'];
    $location=$_POST['location'];
    $subject=$_POST['subject'];
    $message=$_POST['message'];

    //From email address and name
    $mail->From = $visitor_email;
    $mail->FromName = $name;


    //To address and name
    $mail->addAddress("jacobk@communicationpartners.com", "Jacob");

    //Address to which recipient will reply
    $mail->addReplyTo($visitor_email, $name);

    //Send HTML or Plain Text email
    $mail->isHTML(false);

    // Send SMTP
    $email->IsSMTP();
    $email->SMTPAuth = false;
    $email->SMTPDebug = 0;//3
    $email->Host = "192.168.1.12";
    $email->Port="25";
    $email->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    $mail->Subject = $subject;
    $mail->Body = "User Name: $name.\n".
                    "User Email: $visitor_email\n".
                        "User Phone: $phone\n".
                            "User Location: $location\n".
                                "User Message: $message\n";
    try {
        $mail->send();
        echo "Message has been sent successfully";
        header("Location: ../contact.html");
    } catch (Exception $e) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    }
?>