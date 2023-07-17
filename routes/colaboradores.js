const express = require('express');
const router = express.Router();
const colaboradoresController = require('../controllers/colaboradoresController');
const isAdmin = require('../middlewares/userAdmin')


//Creación

router.get('/crear', isAdmin, colaboradoresController.crear);
router.post('/crear', colaboradoresController.guardado);

//Lectura

router.get('/', colaboradoresController.listado);

//Detalle

router.get('/detalle/:id', colaboradoresController.detalle);

//Actualización

router.get('/editar/:id', colaboradoresController.editar);
router.post('/editar/:id', colaboradoresController.actualizar);

//Borrado

router.post('/borrar/:id', colaboradoresController.borrar);


module.exports = router;