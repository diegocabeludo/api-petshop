const router = require('express').Router()
const tableFornecedor = require('./TableFornecedores')

router.use('/', async (req, res) => {
    const results = await tableFornecedor.list()
    res.send(
        JSON.stringify(results)
    )
})

module.exports = router