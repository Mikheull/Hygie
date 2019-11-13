const router = require('express').Router();


/* GET register page. */
router.get('/', async function(req, res, next) {
	res.render('index', {
		options: {
			body: 'auth/register.ejs',
			current_page: 'register',
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
