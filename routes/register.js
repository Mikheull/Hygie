const router = require('express').Router();
let auth_obj = new (require('../model/Auth'))()
let logged;


router.use(async (req, res, next) => {
	logged = req.logged;
	next();
});


/* GET register page. */
router.get('/', async function(req, res, next) {
	res.render('index', {
		logged: logged,
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


router.post('/', async function(req, res, next) {
	if(req.body.firstname && req.body.firstname !== '' && req.body.lastname !== '' && req.body.lastname && req.body.email !== '' && req.body.email && req.body.password !== '' && req.body.password && req.body.confirm_password !== '' && req.body.confirm_password && req.body.accept_cgu !== '' && req.body.accept_cgu){
		let firstname = req.body.firstname
		let lastname = req.body.lastname
		let email = req.body.email
		let password = req.body.password
		let confirm_password = req.body.confirm_password
	
		let verifEmail = await auth_obj.mailExist(email);
		if (verifEmail == false){
			
			if (password == confirm_password){

				let request = await auth_obj.register(firstname, lastname, email, password);
				if(request !== false){
					res.cookie('logged', true, {maxAge: Date.now() + (10 * 365 * 24 * 60 * 60)});
					res.redirect('account');
				}else{
					res.send('erreur lors de l\'insertion');
				}

			}else{
				res.send('mot de passe différent');
			}
			
		}else{
			res.send('mail déjà existant');
		}
		
	}else{
		console.log('erreur = incomplet');
	}
});

module.exports = router;
