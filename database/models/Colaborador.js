module.exports = function(sequelize, dataTypes) {
    let alias = "Colaborador"

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING
        },
        equipo: {
            type: dataTypes.STRING,
        },
        version_win_os: {
            type: dataTypes.STRING,
        },
        bitlocker_filevault: {
            type: dataTypes.STRING
        },
        firewall: {
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: "colaboradores",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        paranoid: true,
        deletedAt: "destroyTime"
        
    }
    let Colaborador = sequelize.define(alias, cols, config);

    return Colaborador;
}