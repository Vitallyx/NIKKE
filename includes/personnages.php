<main>
    <article class="character">
        <section class="search">Recherche</section>
        <section class="list-character">

            <?php
            $path = dirname(__DIR__) . '/characters.json';

            $characters = file_get_contents($path);

            $characters = json_decode($characters, true);

            foreach ($characters as $oneCharacters) {
            ?>
                <a href="?page=<?= $oneCharacters['character_name']; ?>">
                    <div class=" <?= $oneCharacters['character_rarity']; ?>">
                        <img src=" <?= $oneCharacters['character_thumbnail']; ?>">

                        <h1><?= $oneCharacters['character_name']; ?></h1>
                    </div>
                </a>
            <?php
            }

            ?>
        </section>
    </article>