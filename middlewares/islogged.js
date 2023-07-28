const middleware = (req, res, next) => {
    console.log(req.url)
    if(req.session.user || req.url == '/users/login' || req.url == '/users/acceso' || req.url == '/users/registrar'){
        console.log(req.session.user)
        return next()
    }
    return res.redirect('/users/login')
}

module.exports = middleware;