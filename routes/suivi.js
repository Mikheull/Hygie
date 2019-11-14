const router = require('express').Router();


/* GET suivi page. */
router.get('/', async function(req, res, next) {
	res.render('index', {
		options: {
			body: 'suivi/index.ejs',
			current_page: 'suivi',
			assets: {
				stylesheets: ['suivi'],
				online_stylesheets: [],
				javascripts: ['suivi'],
				online_javascripts: [],
				libs: ['jquery', 'fontawesome', 'feather-icons']
			}
		}
	});
});


module.exports = router;
