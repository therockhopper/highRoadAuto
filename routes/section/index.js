var express = require('express')
var router = express.Router()
var cloudant = require('cloudant')
var middleware = require('../../middleware')
var appEnv = require('cfenv').getAppEnv()

var url;
if (process.env.VCAP_SERVICES) {
  var vcapServices = JSON.parse(process.env.VCAP_SERVICES)
  url = vcapServices["cloudantNoSQLDB Dedicated"][0].credentials.url
} else {
  var environment = require('../../conf')
  url = environment["cloudantNoSQLDB Dedicated"][0].credentials.url
}

var cloud = cloudant(url)
var db = cloud.db.use("assesstype-sections");

// Get sections from a array of section ids
router.post('/bulk', function (req, res, next) {
  db.fetch(req.body,
    {
      include_docs: true
    },
    function (err, body) {
      if (err) {
        console.log('[Get bulk Error] ', err.message);
        return res.json({
          success: 0,
          data: err.message
        })
      }
      return res.json({
        success: 1,
        data: body
      })
    });
});

// Get all sections in database
router.get('/', function (req, res, next) {
  db.view('dataapi',
    'sectionById', {
      include_docs: true
    },
    function (err, body) {
      if (err) {
        console.log('[Get sectionByTypeId Error] ', err.message);
        return res.json({
          success: 0,
          data: err.message
        })
      }
      return res.json({
        success: 1,
        data: body
      })
    });
});

// Create/ Update a section
router.put('/update', function (req, res, next) {
  var formdata = req.body
  db.insert(formdata, function (err, body, header) {
    if (err) {
      console.log('[create section Error] ', err.message);
      return res.json({
        success: 0,
        data: err.message
      })
    }
    return res.json({
      success: 1,
      data: body
    })
  })
})

//GET section by id
router.get('/:id', function (req, res, next) {

  db.view('dataapi',
    'sectionById', {
      keys: [req.params.id],
      include_docs: true
    },
    function (err, body) {
      if (err) {
        console.log('[Get sectionById Error] ', err.message);
        return res.json({
          success: 0,
          data: err.message
        })
      }
      return res.json({
        success: 1,
        data: body.rows
      })
    });
})

module.exports = router;
