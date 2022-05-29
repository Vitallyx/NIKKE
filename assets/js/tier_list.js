///////////////////////////////////
// Tier List

const ssTier = document.getElementById('ssTier')
const sTier = document.getElementById('sTier')
const aTier = document.getElementById('aTier')
const bTier = document.getElementById('bTier')
const cTier = document.getElementById('cTier')

async function fetchData() {
    const response = await fetch('./characters.json');
    const data = await response.json();

    data.map((val) => {
        if (val.character_rank == 0) {
            const ssTierChild = document.createElement("div");
            ssTierChild.innerHTML = "<img src='" + val.character_thumbnail + "'/>"
            ssTierChild.classList.add(val.character_rarity)
            ssTier.appendChild(ssTierChild)
        }
        if (val.character_rank == 1) {
            const sTierChild = document.createElement("div");
            sTierChild.innerHTML = "<img src='" + val.character_thumbnail + "'/>"
            sTierChild.classList.add(val.character_rarity)
            sTier.appendChild(sTierChild)
        }
        if (val.character_rank == 2) {
            const aTierChild = document.createElement("div");
            aTierChild.innerHTML = "<img src='" + val.character_thumbnail + "'/>"
            aTierChild.classList.add(val.character_rarity)
            aTier.appendChild(aTierChild)
        }
        if (val.character_rank == 3) {
            const bTierChild = document.createElement("div");
            bTierChild.innerHTML = "<img src='" + val.character_thumbnail + "'/>"
            bTierChild.classList.add(val.character_rarity)
            bTier.appendChild(bTierChild)
        }
        if (val.character_rank == 4) {
            const cTierChild = document.createElement("div");
            cTierChild.innerHTML = "<img src='" + val.character_thumbnail + "'/>"
            cTierChild.classList.add(val.character_rarity)
            cTier.appendChild(cTierChild)
        }
    })
}
fetchData()