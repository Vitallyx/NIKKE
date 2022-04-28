<?php
require 'includes/header.php';

$path =  'characters.json';

$characters = file_get_contents($path);

$characters = json_decode($characters, true);

$page = $_GET['page'] ?? 'accueil';

switch ($page) {
    case 'accueil':
        require 'includes/accueil.php';
        break;

        // case $characters[every character]['character_name']:
        //     require 'includes/templater.php';
        //     break;

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
