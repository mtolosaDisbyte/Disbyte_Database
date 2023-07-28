let db = require('../../database/models/index')

module.exports = {
    list: async (req, res) => {
        let colaboradores = await db.Colaborador.findAll()
        let colaboradoresNuevos = []
        return res.status(200).json({
            total: colaboradores.length,
            data: colaboradores,
            status: 200
        })
    }
}