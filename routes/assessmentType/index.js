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
var db = cloud.db.use("assesstypes");

// GET all assessmentTypes
router.get('/', function (req, res, next) {
  db.view('dataapi',
    'allAssessTypes', {
      include_docs: true
    },
    function (err, body) {
      if (err) {
        console.log('[Get allAssessTypes Error] ', err.message);
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


//GET AssessmentType by id (Including sections)
router.get('/:id', function (req, res, next) {
  db.view('dataapi',
    'assessTypeById', {
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
        data: body.rows[0]
      })
    });
})

// Create/Update assessmentType
router.put('/update', function (req, res, next) {
  var formdata = req.body
  db.insert(formdata, function (err, body, header) {
    if (err) {
      console.log('[Update Error] ', err.message);
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

//Get All assessmentTypes by user
router.get('/assessTypeByUser/:useremail', middleware.isCallingUser, function (req, res, next) {

  db.view('dataapi',
    'assessTypeByUser',
    {
      keys: [ req.params.useremail ],
      include_docs: true
    },
    function (err, body) {
      if (err) {
        console.log('[Get assessTypeByUser Error] ', err.message);
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
