const banderas = document.getElementById('banderas')
const query = new URLSearchParams(window.location.search)
const params = query.get('name')

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async() => {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all')
        const data = await res.json()
        // console.log(data) //aqui es para mostrar los datos en consola borra despues
        const filtroData = data.filter(item => item.name.common === params)
        banderillas(filtroData)
    } catch (error) {
        console.log(error)
    }
}

const banderillas = data =>{
    let elementos = ''
    data.forEach(item => {
        elementos += `
        <article class="card">            
            <img src="${item.flags.png}" alt="" class="img-flag">
            <div>
                <h3>${item.name.common}</h3>
            </div>
            <p>
            <b>Capital:</b> ${item.capital}
            </p>
            <p>
            <b>Continente:</b> ${item.region}
            </p>
            <p>
            <b>Poblacion:</b> ${item.population}
            </p> 
            <p>
            <b>Idioma:</b> ${item.languages.spa}
            </p> 
        </article>
        `
    });
    banderas.innerHTML = elementos
}
