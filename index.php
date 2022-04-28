<?php
require 'includes/header.php';

switch ($page) {
    case 'accueil':
        require 'includes/accueil.php';
        break;

    case 'personnages':
        require 'includes/personnages.php';
        break;

    case 'guides':
        require 'includes/guides.php';
        break;

    case 'tier_list':
        require 'includes/tier_list.php';
        break;

    default:
        require 'includes/error.php';
        break;
}

require 'includes/footer.php';
