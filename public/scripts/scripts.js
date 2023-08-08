function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
 }
window.addEventListener('load', async() => {
    let peticion = await fetch('http://localhost:3000/api/list')

    let respuesta = await peticion.json()

    let Colaboradores = respuesta.data

    let question = await fetch('http://localhost:3000/api/list')

    let answer = await question.json()

    let Usuarios = answer.data

    let usuario = Usuarios.find( u => u.email == getCookie("user"))

    let table = document.querySelector('#colaboradores')
    function render(colaboradores) {
        console.log(getCookie("user"))
        let acumulador = "<tbody>"
        colaboradores.forEach(colaborador => {
            acumulador += `
           <tr>
                <td>${colaborador.id}</td>
                <td>${colaborador.nombre}</td>
                <td>${colaborador.equipo}</td>
                <td>${colaborador.area}</td>
                <td>${colaborador.puesto}</td>
                <td class="botones">        
                ${
                    usuario.rol == 1 ?
                    `<a href="/editar/${colaborador.id}">
                    <button class="btn btn-outline-success btn-sm">Editar</button> 
            </a>  
            <form class="Borrar" action="/borrar/${colaborador.id}" method="POST">
                    <button type="submit" class="btn btn-outline-danger btn-sm">Borrar</button>
            </form>` : ""
                }
                            <a href="/detalle/${colaborador.id}" class="info">
                            <button type="button" class="btn btn-outline-primary btn-sm ">Info</button>
                            </a>
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
        <th scope="col">AREA</th>
        <th scope="col">PUESTO</th>
        <th scope="col">ACCIONES</th>
    </tr>
</thead>`
    let filtrado = Colaboradores.filter(colaborador => {
        return (colaborador.id == e.target.value) || 
        (colaborador.nombre.toLowerCase().trim().includes(e.target.value.toLowerCase().trim())) || 
        (colaborador.area.toLowerCase().trim().includes(e.target.value.toLowerCase().trim())) ||
        (colaborador.puesto.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()))
    })
    table.innerHTML += render(filtrado)
})
})