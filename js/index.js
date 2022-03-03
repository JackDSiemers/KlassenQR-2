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

    response = await fetch("http://127.0.0.1:8001/sessions");


    const person = await response.json();

    const personNode = document.createElement("article")
    personNode.classList.add("session")

    personNode.innerHTML = `
        <div>
        <h2>${person.title}</h2>
        </div>
        <div>
        <h3>${person.dayOfTheWeek}</h3>
        </div>
        <img class="delete" src="images/smalltrash.svg" alt="Delete Sessioin Icon">
        <div class="connected-cell">
        <h4>${person.description}</h4>
        </div>
        <a href="/editSession.html?id=${person.id}" >
        <img class="edit" src="images/iconedit.svg" alt="Edit Session Icon">
        </a>
    `
    container.appendChild(personNode)
}
renderPerson()