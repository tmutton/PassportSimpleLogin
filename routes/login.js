var passport = require('passport');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if (req.isAuthenticated())
    res.redirect('/');
  else
    res.render('login', { title: 'Express' });
});

// post the login
router.post('/', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));

module.exports = router;