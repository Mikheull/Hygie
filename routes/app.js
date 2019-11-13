const router = require('express').Router();


/* GET app-login page. */
router.get('/', async function(req, res, next) {
	res.render('index', {
		options: {
			body: 'app/login.ejs',
			current_page: 'app',
			assets: {
				stylesheets: ['app'],
				online_stylesheets: [],
				javascripts: [],
				online_javascripts: [],
				libs: ['jquery', 'fontawesome', 'feather-icons']
			}
		}
	});
});


/* GET dashboard page. */
router.get('/dashboard', async function(req, res, next) {
	res.render('index', {
		options: {
			body: 'app/dashboard.ejs',
			current_page: 'app',
			assets: {
				stylesheets: ['app'],
				online_stylesheets: [],
				javascripts: [],
				online_javascripts: [],
				libs: ['jquery', 'fontawesome', 'feather-icons']
			}
		}
	});
});


/* GET scan qrcode page. */
router.get('/scan', async function(req, res, next) {
	res.render('index', {
		options: {
			body: 'app/scan.ejs',
			current_page: 'app',
			assets: {
				stylesheets: ['app'],
				online_stylesheets: [],
				javascripts: [],
				online_javascripts: [],
				libs: ['jquery', 'fontawesome', 'feather-icons']
			}
		}
	});
});
module.exports = router;
