const router = require('express').Router();


/* GET reset-password page. */
router.get('/', async function(req, res, next) {
	res.render('index', {
		options: {
			body: 'auth/reset-password.ejs',
			current_page: 'reset-password',
			hide_nav: true,
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
