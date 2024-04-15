<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Envoi d'un message">
    <title>Envoi d'un message</title>
    <link rel="stylesheet" href="../style.css" />
    <link rel="shortcut icon" href="../img/logo_3.svg" type="image/x-icon">
  </head>

<body>
<header>
      <nav>
        <div id="target-element1" class="target-element">
          <a class="logo" href="index.html"
            ><img
              src="img/logo_3.svg"
              alt="Logo combinant un croissant de lune et un f accompagné d'une étoile"
            />
            <p>flavie harre</p></a
          >
        </div>
        <div id="nav-fixed">
          <a class="logo" href="index.html"
            ><img
              src="img/logo_3.svg"
              alt="Logo combinant un croissant de lune et un f accompagné d'une étoile"
            />
            <p>flavie harre</p></a
          >
          <div id="links">
            <a class="about-link menuItem" href="#about">01. About</a>
            <a class="works-link menuItem" href="#travaux">02. Travaux</a>
            <a class="contact-link menuItem" href="#contact-accueil">03. Contact</a>
          </div>
          <button class="hamburger">
            <i class="fa fa-bars"></i>
            <i class="fa-solid fa-xmark xmark"></i>
          </button>
        </div>
      </nav>
    </header>
    <hr class="under-nav" />
    <?php

    $affichage_retour = '';
    $erreurs = 0;

    // Préparation des données du mail de contact
    if (!empty($_POST['nom'])) {
        $nom = ucwords(mb_strtolower($_POST['nom']));
        $nom = filter_var($nom, FILTER_SANITIZE_SPECIAL_CHARS);
    } else {
        $affichage_retour .= 'Le champ "Nom" est obligatoire<br>';
        $erreurs++;
    }
    if (!empty($_POST['prenom'])) {
        $prenom = ucwords(mb_strtolower($_POST['prenom']));
        $prenom = filter_var($prenom, FILTER_SANITIZE_SPECIAL_CHARS);
    } else {
        $affichage_retour .= 'Le champ "Prénom" est obligatoire<br>';
        $erreurs++;
    }

    $pattern = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z\.]{2,15}$/i';

    if (!empty($_POST['email'])) {
        if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) && preg_match($pattern, $_POST['email'])) {
            $email = $_POST['email'];
        } else {
            $affichage_retour .= 'Adresse mail incorrecte<br>';
            $erreurs++;
        }  
    } else {
        $affichage_retour .= 'Le champ "E-mail" est obligatoire<br>';
        $erreurs++;
    }
    if (!empty($_POST['message'])) {
        $msg = $_POST['message'];
        $message = filter_var($msg, FILTER_SANITIZE_SPECIAL_CHARS);
    } else {
        $affichage_retour .= 'Le champ "Message" est obligatoire<br>';
        $erreurs++;
    }

    $nom = ucwords(mb_strtolower($_POST['nom']));
    $nom = filter_var($nom, FILTER_SANITIZE_SPECIAL_CHARS);
    $prenom = ucwords(mb_strtolower($_POST['prenom']));
    $prenom = filter_var($prenom, FILTER_SANITIZE_SPECIAL_CHARS);
    $email = $_POST['email'];
    $msg = $_POST['message'];
    $message = filter_var($msg, FILTER_SANITIZE_SPECIAL_CHARS);
    $email = $_POST['email'];
    $subject = 'Portfolio : demande de ' . $prenom . ' ' . $nom;
    $headers['From'] = $email;
    $headers['Reply-to'] = $email;
    $headers['X-Mailer'] = 'PHP/' . phpversion();
    $headers['MIME-Version'] = '1.0';
    $headers['content-type'] = 'text/html; charset=utf-8';
    $email2 = "harreflavie@gmail.com";
    $email_dest = $email2;

    //Préparation des données mail de confirmation
    $subject2 = 'Portfolio de Flavie Harre : Message bien envoyé';
    $headers2['From'] = $email2;
    $headers2['Reply-to'] = $email2;
    $headers2['X-Mailer'] = 'PHP/' . phpversion();
    $headers2['MIME-Version'] = '1.0';
    $headers2['content-type'] = 'text/html; charset=utf-8';
    $email_dest2 = $email;
    $message2 = 'Ceci est un mail automatique, votre message a bien été envoyé.';

    // Après vérification données, envoi du mail de contact avec vérification
    if ($erreurs == 0) {
        //Envoi du mail de contact
        if (mail($email_dest, $subject, $message, $headers)) {
            $erreurs = 0;
        } else {
            $erreurs++;
        }


        //Envoi du mail de confirmation
        if (mail($email_dest2, $subject2, $message2, $headers2)) {
            $erreurs = 0;
        } else {
            $erreurs++;
        }

        // Détermination du message à afficher après les tentatives d'envoi
        $affichage_retour = 'Votre message a bien été envoyé<br>';

        if ($erreurs != 0) {
            $affichage_retour = 'Echec de l\'envoi du message';
        } else {
            $affichage_retour;
        }
    }


    ?>

    <main class="to-animate">
        <?php
        if ($erreurs == 0) {
            echo '<div class="page-retour">' . "\n";
            echo '<p>' . $affichage_retour . '</p>' . "\n";
            echo '<form class="form-mail" action="../index.html">' . "\n";
            echo '<input type="submit" id="submit" value="Retour">' . "\n";
            echo '</form>' . "\n";
            echo '</div>' . "\n";

        } else {
            echo '<div class="page-retour">' . "\n";
            echo '<p>' . $affichage_retour . '</p>' . "\n";
            echo '<form class="form-mail" action="../index.html#form">' . "\n";
            echo '<input type="submit" id="submit" value="Retour">' . "\n";
            echo '</form>' . "\n";
            echo '</div>' . "\n";
        }
        ?>

    </main>

    <footer class="to-animate">
      <p>Flavie Harre &copy; 2024</p>
    </footer>

    <script src="../main.js"></script>

</body>

</html>