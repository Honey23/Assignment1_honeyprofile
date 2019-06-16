/* connecting with pug files  */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HoneyProfile' });
});

router.get('/Home', (req, res, next) => {
  res.render('Home', {});
});

router.get('/AboutMe', (req, res, next) => {
  res.render('AboutMe', {});
});

router.get('/MyProjects', (req, res, next) => {
  res.render('MyProjects', {});
});

router.get('/MyServices', (req, res, next) => {
  res.render('MyServices', {});
});

router.get('/ContactMe', (req, res, next) => {
  res.render('ContactMe', {});
});

module.exports = router;
