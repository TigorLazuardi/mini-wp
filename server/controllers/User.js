const User = require('../models/User');
const { createToken } = require('../helpers/jwt');
const { compare } = require('../helpers/bcryptjs')

class UserController {
    static create(req, res, next) {
        const { username, email, password } = req.body
        User.create({ username, email, password })
            .then((result) => {
                let payload = createToken({ username: result.username, id: result._id })
                res.status(201).json({ username, payload })
            }).catch(next);
    }

    static login(req, res, next) {
        const { identity, password } = req.body
        User.findOne({ $or: [{ 'username': identity }, { 'email': identity }] })
            .then((result) => {
                if (result && compare(password, result.password)) {
                    let payload = createToken({ username: result.username, id: result._id })
                    res.json({ identity, payload })
                } else {
                    let err = new Error('Wrong Username / Email / Password');
                    err.name = 'AuthenthicationError';
                    next(err)
                }
            }).catch(next);
    }
};

module.exports = UserController