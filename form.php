<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    $to = "iamanudeep6@gmail.com";
    $subject = "New Form Submission";
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: ". $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    $body = "Name: " . $name . "<br>";
    $body .= "Email: " . $email . "<br>";
    $body .= "Phone: " . $phone . "<br>";
    $body .= "Message: " . $message . "<br>";

    if (mail($to, $subject, $body, $headers)) {
        echo "The email was sent.";
    } else {
        echo "There was an error sending the email.";
    }
  }
?>
