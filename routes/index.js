const router = require('express').Router();
let logged;


router.use(async (req, res, next) => {
	logged = req.logged;
	next();
});

/* GET home page. */
router.get('/', async function(req, res, next) {
	res.render('index', {
		logged: logged,
		options: {
			body: 'home/index.ejs',
			current_page: 'home',
			assets: {
				stylesheets: ['home'],
				online_stylesheets: [],
				javascripts: ['home'],
				online_javascripts: [],
				libs: ['jquery', 'fontawesome', 'feather-icons']
			}
		}
	});
});


module.exports = router;
