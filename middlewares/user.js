const middleware = async (req, res, next) => {
    let user = null 
    if(req.cookies && req.cookies.user && !req.session.user){
        req.session.user = await db.users.findOne({where:{email:req.cookies.user}})
    }
    if(req.session && req.session.user){
        user = req.session.user
    }
    console.log(user);
    
    res.locals.user = user
    return next()
}

module.exports = middleware