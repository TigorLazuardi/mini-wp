const mongoose = require('mongoose'),
    URLSlugs = require('mongoose-url-slugs'),
    Schema = mongoose.Schema

const PostSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please put a title for the post"]
    },
    description: {
        type: String,
        default: "Empty description."
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    images: [{
        data: Buffer,
        contentType: String
    }],
    slugKey: String
}, { timestamps: true })

PostSchema.plugin(URLSlugs('slugKey title'), { field: 'slug' })

const Post = mongoose.model('Post', PostSchema)

module.exports = Post