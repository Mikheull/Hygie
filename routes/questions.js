const router = require('express').Router();

let conv_obj = new (require('../model/Conversation'))()
let logged;
let myID;

router.use(async (req, res, next) => {
	logged = req.logged;
	myID = req.myID;
	next();
});



/* GET questions page. */
router.get('/', async function(req, res, next) {
	let myConvs = await conv_obj.listConvs(req.myID);

	res.render('index', {
		myConvs: myConvs,
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


/* POST questions page. */
router.post('/', async function(req, res, next) {
	if(req.body.question){
		let question = req.body.question;

		let request = await conv_obj.createConv(req.myID, question);
		if(request !== false){
			res.redirect('questions/' + request);
		}else{
			res.send('erreur lors de la création');
		}
	}else{
		res.send('Remplissez le champ question');
	}
});




/* GET questions ID page. */
router.get('/:id', async function(req, res, next) {
	var user_id = req.myID;
	var conv_id = req.params.id;
	let getConv = await conv_obj.getConv(conv_id);
	
	if(getConv.user_id == user_id) {
		let messages = await conv_obj.getMessages(conv_id);
		res.render('index', {
			conv: getConv,
			messages: messages,
			options: {
				body: 'questions/conv.ejs',
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
	}else{
		res.send('Vous n\'avez pas la permission');
	}
});


/* POST questions message page. */
router.post('/:id/', async function(req, res, next) {
	if(req.body.message){
		let user_id = req.myID;
		let conv_id = req.params.id;
		let message = req.body.message;

		let request = await conv_obj.insertMessage(user_id, conv_id, message);
		if(request !== false){
			res.redirect('');
		}else{
			res.send('erreur lors du message');
		}
	}else{
		res.send('Remplissez le champ message');
	}
});
module.exports = router;
