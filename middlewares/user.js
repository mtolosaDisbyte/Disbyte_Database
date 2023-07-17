const middleware = async (req, res, next) => {
    let user = null
    if(req.session && req.session.user){
        user = req.session.user
    }
    console.log(user);
    res.locals.user = user
    return next()
}

module.exports = middleware