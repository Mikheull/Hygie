const router = require('express').Router();


/* GET account page. */
router.get('/', async function(req, res, next) {
	res.render('index', {
		options: {
			body: 'account/index.ejs',
			current_page: 'account',
			assets: {
				stylesheets: ['account'],
				online_stylesheets: [],
				javascripts: ['account'],
				online_javascripts: [],
				libs: ['jquery', 'fontawesome', 'feather-icons']
			}
		}
	});
});


module.exports = router;
