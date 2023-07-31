function loginFunc(e){
    localStorage.setItem('loggedUser', JSON.stringify(user));
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