module.exports = function(sequelize, dataTypes  ) { 
    let alias = "users"
    
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        name:{
            type: dataTypes.STRING

        },
        email:{
            type: dataTypes.STRING

        },
        password:{
            type: dataTypes.STRING

        },
        rol:{
            type: dataTypes.INTEGER,
            defaultValue: 0
        },

    }

    let config = {
        tableName: "users",
        timestamps: false,
    }

    let Users  = sequelize.define(alias, cols, config)
    return Users;
    }