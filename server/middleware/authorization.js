const Post = require('../models/Post')

module.exports = (req, res, next) => {
    const PostId = req.params.PostId
    const id = req.decode.id
    Post.findOne({ $or: [{ _id: PostId }, { slug: PostId }] })
        .then((Post) => {
            if (Post) {
                if (Post.owner == id) {
                    next()
                } else {
                    let err = new Error('You are not the owner of this Post')
                    err.name = 'AuthorizationError'
                    next(err)
                }
            } else {
                let err = new Error('Post does not exist')
                err.name = 'NotFound'
                next(err)
            }
        }).catch(next);
}