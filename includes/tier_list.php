<?php
$path = dirname(__DIR__) . '/characters.json';

$characters = file_get_contents($path);

$characters = json_decode($characters, true);
?>


<article class="tier_list">
    <section class="rank">
        <div class="ssTier">
            <h1>SS</h1>
            <?php
            foreach ($characters as $oneCharacters) {
                if ($oneCharacters['character_rank'] == 0) {
            ?>
                    <a href="?page=<?= $oneCharacters['character_name']; ?>">
                        <div class=" <?= $oneCharacters['character_rarity']; ?>">
                            <img src=" <?= $oneCharacters['character_thumbnail']; ?>">
                        </div>
                    </a>
            <?php
                }
            }
            ?>
        </div>
        <div class="sTier">
            <h1>S</h1>
            <?php
            foreach ($characters as $oneCharacters) {
                if ($oneCharacters['character_rank'] == 1) {
            ?>
                    <a href="?page=<?= $oneCharacters['character_name']; ?>">
                        <div class=" <?= $oneCharacters['character_rarity']; ?>">
                            <img src=" <?= $oneCharacters['character_thumbnail']; ?>">
                        </div>
                    </a>
            <?php
                }
            }
            ?>
        </div>
        <div class="aTier">
            <h1>A</h1>
            <?php
            foreach ($characters as $oneCharacters) {
                if ($oneCharacters['character_rank'] == 2) {
            ?>
                    <a href="?page=<?= $oneCharacters['character_name']; ?>">
                        <div class=" <?= $oneCharacters['character_rarity']; ?>">
                            <img src=" <?= $oneCharacters['character_thumbnail']; ?>">
                        </div>
                    </a>
            <?php
                }
            }
            ?>
        </div>
        <div class="bTier">
            <h1>B</h1>
            <?php
            foreach ($characters as $oneCharacters) {
                if ($oneCharacters['character_rank'] == 3) {
            ?>
                    <a href="?page=<?= $oneCharacters['character_name']; ?>">
                        <div class=" <?= $oneCharacters['character_rarity']; ?>">
                            <img src=" <?= $oneCharacters['character_thumbnail']; ?>">
                        </div>
                    </a>
            <?php
                }
            }
            ?>
        </div>
        <div class="cTier">
            <h1>C</h1>
            <?php
            foreach ($characters as $oneCharacters) {
                if ($oneCharacters['character_rank'] == 4) {
            ?>
                    <a href="?page=<?= $oneCharacters['character_name']; ?>">
                        <div class=" <?= $oneCharacters['character_rarity']; ?>">
                            <img src=" <?= $oneCharacters['character_thumbnail']; ?>">
                        </div>
                    </a>
            <?php
                }
            }
            ?>
        </div>
    </section>
</article>