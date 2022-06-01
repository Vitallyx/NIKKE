const title = document.querySelector('title')

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

    const response = await fetch('./characters.json');
    const data = await response.json();

    const response_db = await fetch('./data_chr.json');
    const db = await response_db.json();



    const color = document.querySelector('.color');
    const faction = document.querySelector('.faction');
    const squad = document.querySelector('.squad');

    const squad_chr = document.querySelector('.squad_chr');
    const faction_chr = document.querySelector('.faction_chr');

    const rarity = document.querySelector('.rarity');
    const name = document.querySelector('.name');
    const cv = document.querySelector('.cv');
    const story = document.querySelector('.story');
    const img_chr = document.querySelector('.img_chr');

    color.style.background = db[id].character_color;
    faction.style.background = db[id].character_color;
    squad.style.background = db[id].character_color;

    squad_chr.innerHTML = db[id].character_squad;
    faction_chr.innerHTML = db[id].character_faction;
    story.innerHTML = db[id].character_story;
    cv.innerHTML = "CV : " + db[id].character_cv;
    name.innerHTML = db[id].character_name;
    img_chr.src = db[id].character_images;

    if (db[id].character_rarity == 0) {
        rarity.src = "images/ssr.webp"

    }

    title.textContent = "NIKKE: " + data[id].character_name;
}


fetchData();