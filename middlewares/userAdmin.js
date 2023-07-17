const middleware = (req, res, next) => {
    if(req.session.user.rol == 1){
        console.log(req.session.user)
        return next()
    }
    return res.redirect('/')
}

module.exports = middleware;