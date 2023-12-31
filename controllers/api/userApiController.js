let db = require("../../database/models/index");

module.exports = {
    one: async (req, res) => {
        let user = await db.users.findByPk(req.params.id)
        return res.status(200).json({
            data: user,
            status: 200
        })
    },
    
    all: async (req, res) => {
        let users = await db.users.findAll()
        return res.status(200).json({
            total: users.length,
            data: users,
            status: 200
        })
    }
};