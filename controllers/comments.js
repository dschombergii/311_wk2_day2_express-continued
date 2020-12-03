const comments = require('../data/comments')

const list = (req, res) => {
    res.json(comments)
}

const show = (req, res) => {
    res.json(comments.filter(comment => comment._id === parseInt(req.params.id)))
}

const create = (req, res) => {
    const newComment = {
        _id: comments.length + 1,
        ...req.body
    }
    comments.push(newComment)
    res.json(comments)
}

module.exports = { list, show, create }