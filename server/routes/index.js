const Router = require('express').Router();

const users = require('./users'),
    posts = require('./posts')

Router.get('/', (req, res) => {
    res.json({ message: "Connected to server" });
})

Router.use('/users', users)
Router.use('/posts', posts)

module.exports = Router;