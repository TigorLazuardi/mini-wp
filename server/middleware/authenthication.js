const { verifyUser } = require('../helpers/jwt')

module.exports = (req, res, next) => {
    try {
        const decode = verifyUser(req.headers.token)
        req.decode = decode
        next()
    } catch (err) {
        next(err)
    }
}