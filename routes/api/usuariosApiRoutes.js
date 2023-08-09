const express = require("express");
const router = express.Router();

const controller = require("../../controllers/api/userApiController");

router.get("/users/:id", controller.one);
router.get("/users", controller.all);

module.exports = router;