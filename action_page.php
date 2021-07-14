<?php
if (isset($_POST['submit'])) {
    $firstname = $_POST['fname'];
    $lastname = $_POST['lname'];
    $mailFrom = $_POST['email'];
    $motivation = $_POST['choice'];
    $message = $_POST['message'];

    $mailTo = "hicham.zarouri@azerty-groupe.fr";
    $headers = "From: ".$mailFrom;
    $txt = "Vous avez reçu un e-mail de ".$lastname."".$firstname.".\n\n".$message;

    mail($mailTo, $motivation, $txt, $headers);
    header("Location: index.html?mailsend");
}
?>