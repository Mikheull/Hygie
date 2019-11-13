const router = require('express').Router();


router.use('/', require('./index') );
router.use('/register', require('./register') );
router.use('/login', require('./login') );
router.use('/reset-password', require('./password') );
router.get('/logout', function (req, res) {
	res.cookie('logged', 'null', {maxAge: 0});
	res.clearCookie('logged');
	res.redirect('/login');
})

router.use('/map', require('./map') );
router.use('/questions', require('./questions') );
router.use('/account', require('./account') );

router.use('/app', require('./app') );


router.use(function(req, res){
    res.status(404).send('404');
});
  
module.exports = router;