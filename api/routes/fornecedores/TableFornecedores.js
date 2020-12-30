const Model = require('../../models/fornecedores/ModelFornecedores')
module.exports = {
    list() {
        return Model.findAll()
    }
}