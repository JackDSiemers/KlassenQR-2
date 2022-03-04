const name = new URLSearchParams(window.location.search).get("name");
const surname = new URLSearchParams(window.location.search).get("surname");
const container = document.querySelector(".container")

/**
 * Diese Funktion holt die Posts vom Server und rendert sie im HTML
 * @param searchTerm
 * @returns {Promise<void>}
 */
async function renderPerson() {

    container.innerHTML = ""

    response = await fetch("http://127.0.0.1:8001/students?name=" + name);


    const person = await response.json();

    const personNode = document.createElement("article")
    personNode.classList.add("session")

    personNode.innerHTML = `
        <img class="Img" src="${person.imgSrc}">
        <div>
            <h2>${person.name}</h2>
        </div>
        <div>
            <h2>${person.surname}</h2>
        </div>
        <div>
            <h2>${person.lehrjahr}</h2>
        </div>
        <div>
            <h2>${person.beruf}</h2>
        </div>
    `
    container.appendChild(personNode)
}
renderPerson()