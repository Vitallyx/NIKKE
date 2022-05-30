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




    const test = document.querySelector('.test')

    test.innerHTML = "salut" + " " + data[id].character_name
    console.log(data[id].character_name)

    title.textContent = "NIKKE: " + data[id].character_name

}
fetchData();