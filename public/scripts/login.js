function loginFunc(e){
    localStorage.setItem('logg', JSON.stringify(user));
}
function logout() {
    // Eliminar el objeto de usuario del localStorage al cerrar sesión
    localStorage.removeItem('loggedUser');
}
  // Obtener el usuario logueado (si existe) del localStorage
function getLoggedUser() {
    const user = localStorage.getItem('loggedUser');
    return user ? JSON.parse(user) : null;
}
async function isAdmin(email){
    let usuarios = await fetch()
    let usuario = usuarios.find(u => u.email == email)
    return usuario && usuario.rol == 1 
}