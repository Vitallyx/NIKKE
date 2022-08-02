///////////////////////////////////
// Tier List

const ssTier = document.getElementById('ssTier');
const sTier = document.getElementById('sTier');
const aTier = document.getElementById('aTier');
const bTier = document.getElementById('bTier');
const cTier = document.getElementById('cTier');


async function fetchData() {
    const response = await fetch('./characters.json');
    const data = await response.json();

    data.map((val) => {
        if (val.character_rank == 0) {
            const ssTierChild = document.createElement("a");
            ssTierChild.innerHTML = "<img src='" + val.character_thumbnail + "'/>";
            ssTierChild.href = "character.html?id=" + val.character_id
            ssTierChild.classList.add(val.character_rarity);
            ssTier.appendChild(ssTierChild);
        }
        if (val.character_rank == 1) {
            const sTierChild = document.createElement("a");
            sTierChild.innerHTML = "<img src='" + val.character_thumbnail + "'/>";
            sTierChild.href = "character.html?id=" + val.character_id
            sTierChild.classList.add(val.character_rarity);
            sTier.appendChild(sTierChild);
        }
        if (val.character_rank == 2) {
            const aTierChild = document.createElement("a");
            aTierChild.innerHTML = "<img src='" + val.character_thumbnail + "'/>";
            aTierChild.href = "character.html?id=" + val.character_id
            aTierChild.classList.add(val.character_rarity);
            aTier.appendChild(aTierChild);
        }
        if (val.character_rank == 3) {
            const bTierChild = document.createElement("a");
            bTierChild.innerHTML = "<img src='" + val.character_thumbnail + "'/>";
            bTierChild.href = "character.html?id=" + val.character_id
            bTierChild.classList.add(val.character_rarity);
            bTier.appendChild(bTierChild);
        }
        if (val.character_rank == 4) {
            const cTierChild = document.createElement("a");
            cTierChild.innerHTML = "<img src='" + val.character_thumbnail + "'/>";
            cTierChild.href = "character.html?id=" + val.character_id
            cTierChild.classList.add(val.character_rarity);
            cTier.appendChild(cTierChild);
        }
    })
}
fetchData();