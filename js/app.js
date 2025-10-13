//api a tvmaze
const API = "https://api.tvmaze.com"

//elementos del DOM
const rowsContainer = document.getElementById ('rowsContainer')
const hero = document.getElementById('hero')
const heroTitle = document.getElementById ('heroTitle')
const heroDesc = document.getElementById ('heroDesc')
const heroPlay = document.getElementById ('heroPlay')

const init =async () => {
    const trending = await fetchJSON(`${API}/shows?page=1`)
    renderRow("Tendencias", trending.slice (0, 20))
    console('@@@ trending =>', trending)
}

const renderRow = (title, shows) => {
    const section = document.createElement('section')
        section.classList = 'mb-3'
        section.innerHTML =
        `
        <h3 class="rowTitle">${title}</h3>
        <div class="rail" data-rail></div>
        `
        //funcion para crear poster mini y pegarlos

        rowsContainer.appendChild(section)
}

const fetchJSON = async (url) => {
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error ('Error al cargar datos', url)
    }
    return await res.json()
}

init()
