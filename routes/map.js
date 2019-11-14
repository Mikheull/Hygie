const router = require('express').Router();


/* GET map page. */
router.get('/', async function(req, res, next) {
	res.render('index', {
		options: {
			body: 'map/index.ejs',
			current_page: 'map',
			assets: {
				stylesheets: ['map'],
				online_stylesheets: ['https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css', 'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.css'],
				javascripts: ['map'],
				online_javascripts: [],
				libs: ['jquery', 'fontawesome', 'feather-icons', 'mapbox']
			}
		}
	});
});


module.exports = router;
