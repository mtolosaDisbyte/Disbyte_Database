const db = require('../database/models');
const bcrypt = require('bcrypt');

const controller = {
    registrar: (req, res) => {
        return res.render('registrar');
    },
    crear:(req,res) => {
        let password = req.body.password
        let hash = bcrypt.hashSync(password, 10)
        db.users.create({
            name: req.body.name,
            password: hash,
            email: req.body.email,
        })
        return res.redirect("/users/login")
    },
    login: (req, res) => {
        return res.render('iniciarSesion');
    },
    acceso:(req,res) => {
        db.users.findOne({where:{email:req.body.email}})
            .then((user) => {
                //res.cookie('x', user.rol,{maxAge: 1000 * 60 * 10})
                req.session.user = user
                   res.cookie('user', req.body.email,{maxAge: 1000 * 60 * 30})
                return res.redirect('/')

            })
    },
    logout: (req,res) => {
        delete req.session.user
        res.clearCookie('user');
        return res.redirect('/')
    },
}

module.exports = controller;