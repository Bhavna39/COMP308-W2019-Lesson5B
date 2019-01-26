let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

//about
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

//products
router.get('/products ', function(req, res, next) {
  res.render('index', { title: 'Products' });
});

//services
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

//contact
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

module.exports = router;
