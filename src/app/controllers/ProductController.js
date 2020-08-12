const Category = require('../models/Category')
const Product = require('../models/Product')

module.exports = {
    create(req, res) {
        //Pegar Categorias
        Category.all()
        .then((results) => {
            const categories = results.rows
            return res.render('products/create.njk', { categories })
        }).catch((err) => {
            throw new Error(err)
        })
    },
    async post(req, res) {
        //Logica de salvar.

        const keys = Object.keys(req.body)

        for(key of keys) {
            if (req.body[key] == '') {
                return res.send('Por favor, preencha todos os dados.')
            }
        }

       let results = await Product.create(req.body)
       const productId = results.rows[0].id

       results = await Category.all()
       const categories = results.rows

       return res.render('products/create.njk', { productId, categories })
   
    }
}