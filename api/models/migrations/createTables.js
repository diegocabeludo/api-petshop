const TableModel = require('../fornecedores/ModelFornecedores')

TableModel
    .sync()
    .then(() => console.log('Tabela criada com sucesso.'))
    .catch(console.log)

