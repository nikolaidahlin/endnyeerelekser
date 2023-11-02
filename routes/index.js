const { Router } = require("express");
const { save } = require("../save_json");
let favouriteNumber = require("../number.json");
const add = require("../add");
const AWS = require("aws-sdk");
const s3 = new AWS.S3()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
