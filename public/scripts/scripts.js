document.querySelector('#searchInput').addEventListener('input', async(e) => {
    try {
        let peticion = await fetch('http://localhost:3000/api/list')

        let respuesta = await peticion.json()

        let Colaboradores = respuesta.data
        
        let colaboradores = Colaboradores.map(
            (colaborador) => 
            {let ColaboradoresForm = {nombre : colaborador.nombre,id : colaborador.id}
            return ColaboradoresForm}
            )

        
        
       
        let resultados = e.target.value.length > 0 ? colaboradores.filter(
        colaborador => String(colaborador.nombre).
        toLocaleLowerCase().
        trim().
        includes(String(e.target.value).toLocaleLowerCase().trim())) : []
       
       
        console.log(resultados)
        document.querySelector('#listProducts').innerHTML = null

        resultados.forEach(element => {
        document.querySelector('#listProducts').innerHTML += `
        <a class="aSearch" href="/products/detalle/${element.id}">
        <img src="${element.image}" alt="imagen del producto">
        <div>
        <p> ${element.name}</p>        
        </div>
        </a>
        `
        })

    } catch (error) {

        console.log(error)

    }
})