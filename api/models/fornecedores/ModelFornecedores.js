const Sequelize = require('sequelize')
const db = require('../../database')

const columns = {
    empresa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        alloqNull: false
    },
    categoria: {
        type: Sequelize.ENUM('ração', 'brinquedos'),
        alloqNull: false
    }
}

const options = {
    freezeTableName: true,
    tableName: 'fornecedores',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    version: 'version'
}

module.exports = db.define('fornecedor', columns, options)