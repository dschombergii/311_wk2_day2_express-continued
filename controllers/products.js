const products = require('../data/products')

const list = (req, res) => {
    res.json(products)
}

const show = (req, res) => {
    res.json(products.filter(product => product._id === parseInt(req.params.id)))
}

const create = (req, res) => {
    const newProduct = {
        _id: products.length + 1,
        ...req.body
    }
    products.push(newProduct)
    res.json(products)
}

module.exports = { list, show, create }