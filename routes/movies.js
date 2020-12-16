var express = require('express');
const moviesController = require('../controllers/moviesController');
var router = express.Router();

/* GET users listing. */
router.get('/', moviesController.movies);
router.get('/detail/:id', moviesController.detail);
router.get('/create', moviesController.add);
router.get('/edit/:id', moviesController.edit);
router.post('/edit/:id', moviesController.update);
router.post('/create', moviesController.create);
router.get('/recommended', moviesController.recommended);
router.post('/search', moviesController.search);

module.exports = router;