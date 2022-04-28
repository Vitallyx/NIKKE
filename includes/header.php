<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="assets/css/fontawesome/css/all.css">
    <link href="assets/css/main.css" rel="stylesheet">
    <script src="assets/js/main.js" defer></script>
    <title>NIKKE: The Goddes of Victory FR</title>
</head>

<body>

    <?php
    $page = $_GET['page'] ?? 'accueil'; ?>
    <header>
        <ul>
            <li><a class="<?php if ($page == 'accueil') {
                                echo ' active"';
                            } ?>" href='?page=accueil'>Accueil</a></li>

            <li><a class="<?php if ($page == 'personnages') {
                                echo ' active"';
                            } ?>" href='?page=personnages'>Personnages</a></li>

            <li><a class="<?php if ($page == 'guides') {
                                echo ' active"';
                            } ?>" href='?page=guides'>Guides</a></li>
            <li><a class="<?php if ($page == 'tier_list') {
                                echo ' active"';
                            } ?>" href='?page=tier_list'>Tier List</a></li>
        </ul>
    </header>