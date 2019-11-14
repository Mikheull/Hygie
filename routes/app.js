const router = require('express').Router();

let account_obj = new (require('../model/Account'))()

let logged;
let myID;


router.use(async (req, res, next) => {
	logged = req.logged;
	myID = req.myID;
	next();
});


/* GET dashboard page. */
router.get('/', async function(req, res, next) {
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
router.get('/scan/:id', async function(req, res, next) {
	var user_id = req.params.id;
	let role = await account_obj.getInfo(req.myID, 'role');
	let userData = await account_obj.getUserData(user_id);

	if(role == 1){

		res.render('index', {
			options: {
				body: 'app/scan.ejs',
				current_page: 'app',
				render_mode: 'dashboard',
				userData: userData,
				assets: {
					stylesheets: ['app'],
					online_stylesheets: [],
					javascripts: [],
					online_javascripts: [],
					libs: ['jquery', 'fontawesome', 'feather-icons']
				}
			}
		});
	}else{
		res.send('accès non-autorisé')
	}
	
});

module.exports = router;
