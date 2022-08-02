const title = document.querySelector('title');

// On sépare l'url et on vient récuperer l'id du perso
function getQueryVariable(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split("?");
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}

let id = getQueryVariable("id")

async function fetchData() {

    const response_db = await fetch('./data_chr.json');
    const db = await response_db.json();

    title.textContent = "NIKKE: " + db[id].character_name;

    // Gestion de l'Affiliation
    document.querySelector('.faction').style.background = db[id].character_color;
    document.querySelector('.squad').style.background = db[id].character_color;
    document.querySelector('.squad_chr').innerHTML = db[id].character_squad;
    document.querySelector('.faction_chr').innerHTML = db[id].character_faction;

    // Gestion du Display
    document.querySelector('.display').style.borderTop = "5px solid" + db[id].character_color;

    // Autre info du perso
    document.querySelector('.name').innerHTML = db[id].character_name;
    document.querySelector('.cv').innerHTML = "CV : " + db[id].character_cv;
    document.querySelector('.story').innerHTML = db[id].character_story;
    document.querySelector('.weapon').innerHTML = db[id].character_weapon;
    document.querySelector('.element').innerHTML = "Element : " + db[id].character_element;
    document.querySelector('.img_chr').src = db[id].character_images;

    // Gestion de la rareté + Etape de l'ult
    const rarity = document.querySelector('.rarity');
    const step = document.querySelector('.step');

    if (db[id].character_step == 1) {
        step.src = "images/step1.webp"
    } else if (db[id].character_step == 2) {
        step.src = "images/step2.webp"
    } else if (db[id].character_step == 3) {
        step.src = "images/step3.webp"
    }

    if (db[id].character_rarity == 0) {
        rarity.src = "images/ssr.webp"
    } else if (db[id].character_rarity == 1) {
        rarity.src = "images/sr.webp"
    } else if (db[id].character_rarity == 2) {
        rarity.src = "images/r.webp"
    }

    // Zone Auto-Attaque
    const auto = document.querySelector('.auto');
    auto.style.borderLeft = "5px solid" + db[id].character_color;

    const auto_title = document.querySelector('.auto_title');
    auto_title.innerHTML = db[id].character_auto_title;
    auto_title.style.color = db[id].character_color;

    document.querySelector('.auto_ammo').innerHTML = "Munitions : " + db[id].character_auto_ammo;
    document.querySelector('.auto_reload').innerHTML = "Reload Time : " + db[id].character_auto_reload;
    document.querySelector('.auto_desc').innerHTML = db[id].character_auto;

    // Zone Skill 1
    document.querySelector('.skill1').style.borderLeft = "5px solid" + db[id].character_color;

    const skill1_title = document.querySelector('.skill1_title');
    skill1_title.innerHTML = db[id].character_skill1_title;
    skill1_title.style.color = db[id].character_color;

    document.querySelector('.skill1_cd').innerHTML = db[id].character_skill1_cd;
    document.querySelector('.skill1_desc').innerHTML = db[id].character_skill1;

    // Zone Skill 2
    document.querySelector('.skill2').style.borderLeft = "5px solid" + db[id].character_color;

    const skill2_title = document.querySelector('.skill2_title');
    skill2_title.innerHTML = db[id].character_skill2_title;
    skill2_title.style.color = db[id].character_color;

    document.querySelector('.skill2_cd').innerHTML = db[id].character_skill2_cd;
    document.querySelector('.skill2_desc').innerHTML = db[id].character_skill2;

    // Zone Skill Ultimate
    document.querySelector('.skill_ultimate').style.borderLeft = "5px solid" + db[id].character_color;

    document.querySelector('.ultimate_title').innerHTML = db[id].character_ultimate_title;
    document.querySelector('.ultimate_cd').innerHTML = db[id].character_ultimate_cd;;
    document.querySelector('.ultimate_desc').innerHTML = db[id].character_ultimate;
    document.querySelector('.ultimate_title').style.color = db[id].character_color;

    // Gestion de la vidéo
    document.querySelector('.video').src = db[id].character_video;

    // Gestion des images
    document.querySelector('.aim').src = db[id].character_aim;
    document.querySelector('.cover').src = db[id].character_cover;

}
fetchData();