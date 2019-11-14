const router = require('express').Router();


router.use('/', require('./index') );
router.use('/register', require('./register') );
router.use('/login', require('./login') );
router.use('/reset-password', require('./password') );

router.use('/map', require('./map') );
router.use('/questions', require('./questions') );
router.use('/suivi', require('./suivi') );
router.use('/account', require('./account') );

router.use('/app', require('./app') );



router.get('/logout', function (req, res) {
	res.cookie('logged', 'null', {maxAge: 0});
	res.clearCookie('logged');
	res.cookie('email', 'null', {maxAge: 0});
	res.clearCookie('email');
	res.cookie('password', 'null', {maxAge: 0});
	res.clearCookie('password');
	res.redirect('/login');
})
router.use(function(req, res){
    res.status(404).send('404');
});
  
module.exports = router;