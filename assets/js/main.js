///////////////////////////////////
// Header

let header = document.querySelector('header');

window.addEventListener('scroll', function() {
    header.classList.toggle("sticky", this.window.scrollY > 0);
})


///////////////////////////////////
// Header Mobile

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

///////////////////////////////////
// Characters

const main = document.getElementById('list-character');

async function fetchData() {
    const response = await fetch('../characters.json');
    const data = await response.json();

    data.map((val) => {
        const div = document.createElement("div");

        div.innerHTML = "<img src='" + val.character_thumbnail + "'/><h1>" + val.character_name + "</h1>"
        div.classList.add(val.character_rarity)
        main.appendChild(div)
    })

}
fetchData()

///////////////////////////////////
// Tier List

const ssTier = document.getElementById('ssTier')
const cTier = document.getElementById('cTier')



async function fetchData2() {
    const response = await fetch('../characters.json');
    const data = await response.json();



    data.map((val) => {



        if (val.character_rank == 0) {
            const ssTierChild = document.createElement("div");
            ssTierChild.innerHTML = "<img src='" + val.character_thumbnail + "'/>"
            ssTierChild.classList.add(val.character_rarity)
            ssTier.appendChild(ssTierChild)
        }
        if (val.character_rank == 4) {
            const cTierChild = document.createElement("div");
            cTierChild.innerHTML = "<img src='" + val.character_thumbnail + "'/>"
            cTierChild.classList.add(val.character_rarity)
            cTier.appendChild(cTierChild)
        }


    })

}
fetchData2()