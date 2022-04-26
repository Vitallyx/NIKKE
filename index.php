<?php
require 'includes/header.php';

$page = $_GET['page'] ?? 'accueil';

switch ($page) {
    case 'accueil':
        require 'includes/accueil.php';
        break;

    case 'personnages':
        require 'includes/personnages.php';
        break;

    default:
        require 'includes/error.php';
        break;
}

require 'includes/footer.php';
