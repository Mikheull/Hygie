const router = require('express').Router();


let logged;


router.use(async (req, res, next) => {
	logged = req.logged;
	next();
});


/* GET dashboard page. */
router.get('/suivi', async function(req, res, next) {
	res.render('index', {
		options: {
			body: 'template/suivi.ejs',
			current_page: 'template',
            render_mode: 'dashboard',
			assets: {
				stylesheets: ['template'],
				online_stylesheets: [],
				javascripts: [],
				online_javascripts: [],
				libs: ['jquery', 'fontawesome', 'feather-icons']
			}
		}
	});
});



module.exports = router;
