var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // render the index page and pass through the user
  res.render('index', { user: req.user });
});

module.exports = router;
