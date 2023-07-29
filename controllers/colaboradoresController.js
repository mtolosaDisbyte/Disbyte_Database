let db = require('../database/models');
const { Op } = require('sequelize');
const fetch = require('node-fetch');

let colaboradoresController = {
    crear: function (req, res) {
        db.Colaborador.findAll()
            .then(function () {
                return res.render('creacionColaboradores');
            })
    },
    guardado: function (req, res) {
        db.Colaborador.create({
            nombre: req.body.nombre,
            equipo: req.body.equipo,
            version_win_os: req.body.version_win_os,
            bitlocker_filevault: req.body.bitlocker_filevault,
            firewall: req.body.firewall,
        })
        res.redirect("/");
    },
    buscar: async function (req,res) {
        console.log(req.query.q)
        let query = null
        let colaboradores = await db.Colaborador.findAll({
            where:{
                nombre:{
                    [Op.like] : '%' + req.query.q +'%'
                }
            }
        })
        return res.render("partials/colaboradores" , {colaboradores,query})
    },
    listado: function (req, res) {
        // console.log(res.locals)
        db.Colaborador.findAll()
            .then(function (colaboradores){
                res.render('listadoColaboradores', {colaboradores:colaboradores});
            })
    },
    detalle: function (req, res) {
        db.Colaborador.findByPk(req.params.id, {
        })
            .then(function (colaborador) {
                res.render('detalleColaborador', {colaborador:colaborador});
            })
            
    },
    editar: function (req, res) {
        let pedidoColaborador = db.Colaborador.findByPk(req.params.id)

        Promise.all([pedidoColaborador])
            .then(function([colaborador]) {
                res.render('editarColaborador', {colaborador:colaborador});
            })
    },
    actualizar: function (req, res) {
        //console.log(req.query)
        db.Colaborador.update({
            nombre: req.body.nombre,
            equipo: req.body.equipo,
            version_win_os: req.body.version_win_os,
            bitlocker_filevault: req.body.bitlocker_filevault,
            firewall: req.body.firewall,
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect("/")
    },
    borrar: function (req, res) {
        db.Colaborador.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/");
    }
}

module.exports = colaboradoresController;