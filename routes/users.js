const express = require('express');
const router = express.Router();


//Controller
const usersController = require('../controllers/usuariosController');
const middleware = require('../middlewares/userAdmin');

//Registro
router.get('/registrar', usersController.registrar);
router.post('/registrar', usersController.crear);

//Login
router.get('/login', usersController.login);
router.post('/acceso',  usersController.acceso);

//Logout
router.get('/logout', usersController.logout);


module.exports = router;