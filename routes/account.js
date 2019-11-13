const router = require('express').Router();
let logged;


router.use(async (req, res, next) => {
	logged = req.logged;
	next();
});

/* GET account page. */
router.get('/', async function(req, res, next) {
	res.render('index', {
		logged: logged,
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
