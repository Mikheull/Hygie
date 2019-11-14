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


/* GET suivi page. */
router.get('/', async function(req, res, next) {
	res.render('index', {
		options: {
			body: 'suivi/index.ejs',
			current_page: 'suivi',
			assets: {
				stylesheets: ['suivi'],
				online_stylesheets: [],
				javascripts: ['suivi'],
				online_javascripts: [],
				libs: ['jquery', 'fontawesome', 'feather-icons']
			}
		}
	});
});


/* GET suivi ref page. */
router.get('/reference/:id', async function(req, res, next) {
	var fiche_id = req.params.id;
	let userData = await account_obj.getUserData(req.myID);

	let qr = QRCode.toDataURL(process.env.URI + 'app/scan/' + req.myID, function (err, url) {
		res.render('index', {
			userData: userData,
			fiche_id: fiche_id,
			qrcode: url,
			options: {
				body: 'suivi/reference.ejs',
				current_page: 'suivi',
				assets: {
					stylesheets: ['suivi'],
					online_stylesheets: ['https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css', 'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.css'],
					javascripts: ['suivi'],
					online_javascripts: [],
					libs: ['jquery', 'fontawesome', 'feather-icons', 'mapbox']
				}
			}
		});
	})
	
});



module.exports = router;
