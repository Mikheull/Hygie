const router = require('express').Router();


/* GET login page. */
router.get('/', async function(req, res, next) {
	res.render('index', {
		options: {
			body: 'auth/login.ejs',
			current_page: 'login',
			assets: {
				stylesheets: ['auth'],
				online_stylesheets: [],
				javascripts: [],
				online_javascripts: [],
				libs: ['jquery', 'fontawesome', 'feather-icons']
			}
		}
	});
});


module.exports = router;
