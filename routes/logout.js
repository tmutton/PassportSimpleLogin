var express = require('express');
var router = express.Router();

// on page load, logout and redirect
router.get('/', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;