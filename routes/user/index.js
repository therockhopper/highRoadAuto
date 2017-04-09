var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // check to see if we have user object...
  //console.log(req.user)
  if ( typeof req.user !== 'undefined' ) {
    return res.json({
      success: true,
      data: req.user
    });
  } else {
    return res.json({
      success: false
    });
  }
});

module.exports = router;
