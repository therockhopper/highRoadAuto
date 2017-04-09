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

//https://3ea9472d-f97f-4e6b-abb0-f602d2c45646-bluemix.cloudant.com/assesstypes/_design/dataapi/_search/forms?q=formtype%3Ainstance%20AND%20owner%3Abrennanw%40us.ibm.com
//sample post: {"q":"formtype:instance","include_docs":"true"}
//{"q":"(formtype:instance AND owner:brennanw@us.ibm.com) OR (formtype:survey AND user:brennanw@us.ibm.com)","include_docs":"true"}
router.post('/', function (req, res, next) {
  var searchCriteria = req.body
  db.search(
    'dataapi',//design doc
    'forms', //index name
    searchCriteria,
    function (err, data) {
      if (err) {
        console.log('[List Error] ', err.message);
        return res.json({
          success: 0,
          data: err.message,
          searchCriteria:searchCriteria
        })
      }
      return res.json({
        success: 1,
        data:data.rows,
        searchCriteria:searchCriteria
      })
    })

})

//get document
router.get('/getbyid/:id', function (req, res, next) {
  db.get(req.params.id, function (err, doc) {
    if (err) {
      console.log('[Get Error] ', err.message);
      return res.json({
        success: 0,
        data: err.message
      })
    }
    return res.json({
      success: 1,
      data: doc
    })
  })
})

module.exports = router;
