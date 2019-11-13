const router = require('express').Router();


/* GET home page. */
router.get('/', async function(req, res, next) {
	res.render('index', {
		options: {
			body: 'home/index.ejs',
			current_page: 'home',
			assets: {
				stylesheets: ['home'],
				online_stylesheets: [],
				javascripts: [],
				online_javascripts: [],
				libs: ['jquery', 'fontawesome', 'feather-icons']
			}
		}
	});
});


module.exports = router;
