var express = require('express');
var router = express.Router();
var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();

/* GET app page. */
router.get('/', function(req, res, next) {
  if ( appEnv.isLocal ) {
    return res.render('index-dev');
  }

  return res.render('index');
});

// because angular...
router.get('*', function(req, res, next) {
  if ( appEnv.isLocal ) {
    return res.render('index-dev');
  }

  return res.render('index');
});


module.exports = router;
