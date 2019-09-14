const Post = require('../models/Post');

class PostController {
    static create(req, res, next) {
        const { id, username } = req.decode,
            { images } = req.files,
            { title, description } = req.body;
        Post.create({ title, description, owner: id, slugKey: username })
            .then((newPost) => {
                res.json(newPost)
            })
            //     if (images) { Post.findByIdAndUpdate(result._id, { $push: { images } }) }
            // })
            .then((result) => {
                console.log(result)
                res.status(201).json(result)
            })
            .catch(next);
    }

    static read(req, res, next) {
        const { id } = req.decode;
        let { q, order, sort } = req.query;
        const where = { _id: id }

        if (q) {
            where.title = new RegExp(q, 'i');
            where.description = new RegExp(q, 'i')
        };

        if (!order) order = 'title'
        if (!sort) sort = 1


        Post.find(where)
            .sort([[order, sort]])
            .then((result) => {
                res.json(result)
            }).catch(next);
    }

    static update(req, res, next) {
        const { PostId } = req.params;
        const { images } = req.files;
        const { title, description } = req.body;
        Post.update({ _id: PostId }, {
            $set: { title, description },
            $push: { images }
        }, { runValidators: true })
            .then((result) => {
                res.status(200).json(result)
            }).catch(next);
    }

    static delete(req, res, next) {
        const { PostId } = req.params;
        Post.findByIdAndDelete(PostId)
            .then((result) => {
                res.status(200).json(result)
            }).catch(next);
    }
};

module.exports = PostController