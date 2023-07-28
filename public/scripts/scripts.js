window.addEventListener('load', async() => {
    let peticion = await fetch('http://localhost:3000/api/list')

    let respuesta = await peticion.json()

    let Colaboradores = respuesta.data

    let table = document.querySelector('#colaboradores')
    function render(colaboradores) {
        let acumulador = "<tbody>"
        colaboradores.forEach(colaborador => {
            acumulador += `
            <tr>
                <td>${colaborador.id}</td>
                <td>${colaborador.nombre}</td>
                <td>${colaborador.equipo}</td>
                <td>${colaborador.version_win_os}</td>
                <td>${colaborador.bitlocker_filevault}</td>
                <td>${colaborador.firewall}</td>
                <td class="botones">        
                            <a href="/editar/${colaborador.id}">
                                    <button class="btn btn-outline-success btn-sm">Editar</button> 
                            </a>  
                            <form action="/borrar/${colaborador.id}" method="POST" style="margin: auto;";">
                                    <button type="submit" class="btn btn-outline-danger btn-sm">Borrar</button>
                            </form>
                </td>
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
        <th scope="col">EQUIPO</th>
        <th scope="col">VERSION WIN|OS</th>
        <th scope="col">BITLOCKER|FILEVAULT</th>
        <th scope="col">FIREWALL</th>
        <th scope="col">ACCIONES</th>
    </tr>
</thead>`
    let filtrado = Colaboradores.filter(colaborador => {
        return (colaborador.id == e.target.value) || 
        (colaborador.nombre.toLowerCase().trim().includes(e.target.value.toLowerCase().trim())) || 
        (colaborador.equipo.toLowerCase().trim().includes(e.target.value.toLowerCase().trim())) ||
        (colaborador.version_win_os.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()))
    })
    table.innerHTML += render(filtrado)
})
})