import * as express from 'express';
import * as morgan from 'morgan';

const router = express.Router();

router.use(morgan('combined'));

// define the home page route
router.get('/', function (req, res) {
    res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
    res.send('About birds')
})

export { router };
