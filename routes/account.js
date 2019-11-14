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
	console.log(myAntecedents);
	
	let qr = QRCode.toDataURL('http://localhost:3030/app/scan/' + req.myID, function (err, url) {
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


/* POST Add antecedent page. */
router.post('/', async function(req, res) {
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

	}
	else {
		res.send(req.body);
	}
});

module.exports = router;
