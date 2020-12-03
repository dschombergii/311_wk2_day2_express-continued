const vehicles = require('../data/vehicles')

const list = (req, res) => {
    res.json(vehicles)
}

const show = (req, res) => {
    res.json(vehicles.filter(vehicle => vehicle._id === parseInt(req.params.id)))
}

const create = (req, res) => {
    const newVehicle = {
        _id: vehicles.length + 1,
        ...req.body
    }
    vehicles.push(newVehicle)
    res.json(vehicles)
}

module.exports = { list, show, create }