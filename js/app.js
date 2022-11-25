const banderas = document.getElementById('banderas')

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async() => {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all')
        const data = await res.json()
        banderillas(data)
        formularioCliente(data)
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
            <a href="infopais.html?name=${item.name.common}">Detalles</a>
        </article>
        `
    });
    banderas.innerHTML = elementos
}
