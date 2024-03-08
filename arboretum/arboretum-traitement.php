<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message envoyé</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<?php
$email=$_POST["email"];

echo '<p class="envoi"> Votre message a bien été envoyé, vous recevrez une réponse à votre adresse mail : ' .$email. '</p>' ;
?>
<br>
<p><a id="back" href="contact.html">Retour</a></p>
    
</body>
</html>

