const Router = require('express').Router();
const multer = require('multer');
const authenthication = require('../middleware/authenthication');
const authorization = require('../middleware/authorization')
const PostController = require('../controllers/Post');

const upload = multer();

Router.use(authenthication)
Router.get('/', PostController.read);
Router.post('/', upload.array('images'), PostController.create)

Router.use('/:PostId', authorization);
Router.put('/:PostId', upload.array('images'), PostController.update);
Router.delete('/:PostId', PostController.delete);

module.exports = Router;