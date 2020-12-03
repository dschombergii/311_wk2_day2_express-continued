const contacts = require('../data/contacts')

const list = (req, res) => {
    res.json(contacts)
}

const show = (req, res) => {
    res.json(contacts.filter(contact => contact._id === parseInt(req.params.id)))
}

const create = (req, res) => {
    const newContact = {
        _id: contacts.length + 1,
        ...req.body
    }
    contacts.push(newContact)
    res.json(contacts)
}

module.exports = { list, show, create }