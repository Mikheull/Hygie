const router = require('express').Router();


/* GET map page. */
router.get('/', async function(req, res, next) {
	res.render('index', {
		options: {
			body: 'map/index.ejs',
			current_page: 'map',
			assets: {
				stylesheets: ['map'],
				online_stylesheets: [],
				javascripts: ['map'],
				online_javascripts: [],
				libs: ['jquery', 'fontawesome', 'feather-icons']
			}
		}
	});
});


module.exports = router;
