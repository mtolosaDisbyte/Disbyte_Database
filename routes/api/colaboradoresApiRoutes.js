const express = require('express')
const router = express.Router()

const controller = require('../../controllers/api/colaboradoresApiController')

router.get('/list',controller.list)

module.exports = router;