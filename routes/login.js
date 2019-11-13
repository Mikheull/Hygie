const router = require('express').Router();
let auth_obj = new (require('../model/Auth'))()
let logged;


router.use(async (req, res, next) => {
	logged = req.logged;
	next();
});


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


router.post('/', async function(req, res, next) {
	if(req.body.email !== '' && req.body.email && req.body.password !== '' && req.body.password){
		let email = req.body.email
		let password = req.body.password
	
		let verifEmail = await auth_obj.mailExist(email);
		if (verifEmail == true){
			
			let request = await auth_obj.login(email, password);
			if(request !== false){
				res.cookie('logged', true, {maxAge: Date.now() + (10 * 365 * 24 * 60 * 60)});
				res.cookie('email', email, {maxAge: Date.now() + (10 * 365 * 24 * 60 * 60)});
				res.cookie('password', password, {maxAge: Date.now() + (10 * 365 * 24 * 60 * 60)});
				res.redirect('account');
			}else{
				res.send('erreur lors de la connexion');
			}

		}else{
			res.send('mail inexistant');
		}
		
	}else{
		console.log('erreur = incomplet');
	}
});

module.exports = router;
