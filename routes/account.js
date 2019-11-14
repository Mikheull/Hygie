const router = require('express').Router();
const QRCode = require('qrcode')

let account_obj = new (require('../model/Account'))()
let logged;
let myID;


router.use(async (req, res, next) => {
	logged = req.logged;
	myID = req.myID;
	next();
});


/* GET account page. */
router.get('/', async function(req, res, next) {
	let myData = await account_obj.getUserData(req.myID);
	let myAntecedents = await account_obj.getUserAntecedents(req.myID);
	
	let qr = QRCode.toDataURL(process.env.URI + 'app/scan/' + req.myID, function (err, url) {
		res.render('index', {
			logged: logged,
			myData: myData,
			myAntecedents: myAntecedents,
			qrcode: url,
			options: {
				body: 'account/index.ejs',
				current_page: 'account',
				hide_nav: true,
				assets: {
					stylesheets: ['account'],
					online_stylesheets: [],
					javascripts: ['account'],
					online_javascripts: [],
					libs: ['jquery', 'fontawesome', 'feather-icons']
				}
			}
		});
	})

});


router.post('/', async function(req, res) {
	/* POST Add antecedent page. */
	if(req.body.save_btn == ''){
		
		if(req.body.reason !== '' && req.body.reason){
			let location = (req.body.location !== '' && req.body.location) ? req.body.location : null ;
			let date = (req.body.date !== '' && req.body.date) ? req.body.date : null ;
			let reason = req.body.reason;
				
			let request = await account_obj.newAntecedent(req.myID, location, date, reason);
			if(request !== false){
				res.redirect('account');
			}else{
				res.send('erreur lors de la création');
			}
			
		}else{
			console.log('erreur = incomplet');
		}

	/* POST save account. */
	}else if(req.body.save_compte_btn == ''){
			
		let first_name = (req.body.first_name !== '' && req.body.first_name) ? req.body.first_name : null ;
		let lastname = (req.body.lastname !== '' && req.body.lastname) ? req.body.lastname : null ;
		let mail = (req.body.mail !== '' && req.body.mail) ? req.body.mail : null ;
		let telephone = (req.body.telephone !== '' && req.body.telephone) ? req.body.telephone : null ;
		let adress = (req.body.adress !== '' && req.body.adress) ? req.body.adress : null ;
		let birdthay = (req.body.birdthay !== '' && req.body.birdthay) ? req.body.birdthay : null ;
			
		let request = await account_obj.updateAccount_main(req.myID, first_name, lastname, mail, telephone, adress, birdthay);
		if(request !== false){
			res.redirect('account');
		}else{
			res.send('erreur lors de l\'update ');
		}

	/* POST save general account. */
	}else if(req.body.save_general_btn == ''){
		
		let gender = (req.body.gender !== '' && req.body.gender) ? req.body.gender : null ;
		let height = (req.body.height !== '' && req.body.height) ? req.body.height : null ;
		let weight = (req.body.weight !== '' && req.body.weight) ? req.body.weight : null ;
		let blood_group = (req.body.blood_group !== '' && req.body.blood_group) ? req.body.blood_group : null ;
			
		let request = await account_obj.updateAccount_gen(req.myID, gender, height, weight, blood_group);
		if(request !== false){
			res.redirect('account');
		}else{
			res.send('erreur lors de l\'update ');
		}

	/* POST save password account. */
	}else if(req.body.save_pass_btn == ''){
			
		let password = (req.body.password !== '' && req.body.password) ? req.body.password : null ;
		let confirm_password = (req.body.confirm_password !== '' && req.body.confirm_password) ? req.body.confirm_password : null ;
			
		if (password == confirm_password){

			let request = await account_obj.updateAccount_pass(req.myID, password);
			if(request !== false){
				res.redirect('logout');
			}else{
				res.send('erreur lors de l\'update ');
			}

		}else{
			res.send('mot de passe différent');
		}

	}
	else {
		res.send(req.body);
	}
});

module.exports = router;
