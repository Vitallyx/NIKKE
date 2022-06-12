const title = document.querySelector('title');


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

    const display = document.querySelector('.display');

    const faction = document.querySelector('.faction');
    const squad = document.querySelector('.squad');
    const squad_chr = document.querySelector('.squad_chr');
    const faction_chr = document.querySelector('.faction_chr');

    const rarity = document.querySelector('.rarity');
    const step = document.querySelector('.step');
    const name = document.querySelector('.name');
    const cv = document.querySelector('.cv');
    const story = document.querySelector('.story');
    const weapon = document.querySelector('.weapon');
    const img_chr = document.querySelector('.img_chr');

    display.style.borderTop = "5px solid" + db[id].character_color;

    faction.style.background = db[id].character_color;
    squad.style.background = db[id].character_color;
    squad_chr.innerHTML = db[id].character_squad;
    faction_chr.innerHTML = db[id].character_faction;

    story.innerHTML = db[id].character_story;
    weapon.innerHTML = db[id].character_weapon;
    cv.innerHTML = "CV : " + db[id].character_cv;
    name.innerHTML = db[id].character_name;
    img_chr.src = db[id].character_images;

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

    const auto = document.querySelector('.auto');
    auto.style.borderLeft = "5px solid" + db[id].character_color;


    const auto_title = document.querySelector('.auto_title');
    const auto_ammmo = document.querySelector('.auto_ammo');
    const auto_reload = document.querySelector('.auto_reload');
    const auto_desc = document.querySelector('.auto_desc');

    auto_title.innerHTML = db[id].character_auto_title;
    auto_title.style.color = db[id].character_color;
    auto_ammmo.innerHTML = "Munitions : " + db[id].character_auto_ammo;
    auto_reload.innerHTML = "Reload Time : " + db[id].character_auto_reload;
    auto_desc.innerHTML = db[id].character_auto;

    const skill1 = document.querySelector('.skill1');
    skill1.style.borderLeft = "5px solid" + db[id].character_color;

    const skill1_title = document.querySelector('.skill1_title');
    const skill1_cd = document.querySelector('.skill1_cd');
    const skill1_desc = document.querySelector('.skill1_desc');

    skill1_cd.innerHTML = db[id].character_skill1_cd;
    skill1_title.innerHTML = db[id].character_skill1_title;
    skill1_title.style.color = db[id].character_color;
    skill1_desc.innerHTML = db[id].character_skill1;

    const skill2 = document.querySelector('.skill2');
    skill2.style.borderLeft = "5px solid" + db[id].character_color;

    const skill2_title = document.querySelector('.skill2_title');
    const skill2_cd = document.querySelector('.skill2_cd');
    const skill2_desc = document.querySelector('.skill2_desc');

    skill2_cd.innerHTML = db[id].character_skill2_cd;
    skill2_title.innerHTML = db[id].character_skill2_title;
    skill2_title.style.color = db[id].character_color;
    skill2_desc.innerHTML = db[id].character_skill2;

    const ultimate = document.querySelector('.skill_ultimate');
    ultimate.style.borderLeft = "5px solid" + db[id].character_color;

    const ultimate_title = document.querySelector('.ultimate_title');
    const ultimate_cd = document.querySelector('.ultimate_cd');
    const ultimate_desc = document.querySelector('.ultimate_desc');

    ultimate_cd.innerHTML = db[id].character_ultimate_cd;
    ultimate_title.innerHTML = db[id].character_ultimate_title;
    ultimate_title.style.color = db[id].character_color;
    ultimate_desc.innerHTML = db[id].character_ultimate;

    const video = document.querySelector('.video');
    video.src = db[id].character_video;

    const aim = document.querySelector('.aim');
    const cover = document.querySelector('.cover');

    aim.src = db[id].character_aim;
    cover.src = db[id].character_cover;

}
fetchData();