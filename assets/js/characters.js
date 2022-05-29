///////////////////////////////////
// Characters

const main = document.getElementById('list-character');
const information = document.querySelector('.information');
const close = document.querySelector('.fa-times');


const thumbnail = document.querySelector('.thumbnail');
const char_title = document.querySelector('.char_title');
const description = document.querySelector('.description')

async function fetchData() {
    const response = await fetch('./characters.json');
    const data = await response.json();

    data.map((val) => {
        const div = document.createElement("div");
        div.innerHTML = "<img src='" + val.character_thumbnail + "'/><h1>" + val.character_name + "</h1>";
        div.classList.add(val.character_rarity);
        main.appendChild(div);


        div.addEventListener('click', (e) => {
            console.log(val.character_name);
            information.classList.toggle('show');

            description.innerHTML = val.character_description;
            thumbnail.src = val.character_thumbnail;

            char_title.innerHTML = val.character_name;
        })
    })

}

///////////////////////////////////
// Open Characters 
close.addEventListener('click', function() {
    information.classList.toggle('show');
})
fetchData();