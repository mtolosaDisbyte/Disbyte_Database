const middleware = (req, res, next) => {
    if(req.session.user || req.url == '/users/login' || req.url == '/users/acceso' || req.url == '/users/registrar'){
        return next()
    }
    return res.redirect('/users/login')
}

module.exports = middleware;