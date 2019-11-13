const router = require('express').Router();
let resolve = require('path').resolve


router.use('/', require('./index') );


router.use(function(req, res){
    res.status(404).send('404');
});
  
module.exports = router;