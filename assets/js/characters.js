///////////////////////////////////
// Characters

const main = document.getElementById('list-character');
const information = document.querySelector('.information');

async function fetchData() {
    const response = await fetch('./characters.json');
    const data = await response.json();

    data.map((val) => {
        const div = document.createElement("div");
        div.innerHTML = "<a href='character.html?id=" + val.character_id + "')><img src='" + val.character_thumbnail + "'/><h1>" + val.character_name + "</h1></a>";
        div.classList.add(val.character_rarity);
        main.appendChild(div);

    })


}
fetchData();