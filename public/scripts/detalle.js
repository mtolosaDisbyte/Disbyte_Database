window.addEventListener('load', async() => {
    let Colaboradores = respuesta.data

    let table = document.querySelector('#colaboradores')
    function render(colaboradores) {
        let acumulador = "<tbody>"
        colaboradores.forEach(colaborador => {
            acumulador += `
            <tr>
                <td>${colaborador.id}</td>
                <td>${colaborador.nombre}</td>
                <td>${colaborador.area}</td>
                <td>${colaborador.puesto}</td>
            </tr>
        `
        })
    acumulador+= '</tbody>'
    return acumulador
    }
    console.log(Colaboradores)
    table.innerHTML+=render(Colaboradores)
document.querySelector('#searchInput').addEventListener('input', async(e) => {
    table.innerHTML=  `<thead class="table-dark">
    <tr class="bg-primary text-white">
        <th scope="col">ID</th>
        <th scope="col">NOMBRE</th>
        <th scope="col">AREA</th>
        <th scope="col">PUESTO</th>
    </tr>
</thead>`
})
})