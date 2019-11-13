const router = require('express').Router();


/* GET questions page. */
router.get('/', async function(req, res, next) {
	res.render('index', {
		options: {
			body: 'questions/index.ejs',
			current_page: 'questions',
			assets: {
				stylesheets: ['questions'],
				online_stylesheets: [],
				javascripts: ['questions'],
				online_javascripts: [],
				libs: ['jquery', 'fontawesome', 'feather-icons']
			}
		}
	});
});


module.exports = router;
