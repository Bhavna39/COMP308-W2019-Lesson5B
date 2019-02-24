let express = require('express');
let router = express.Router();


let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

//about
router.get('/about', indexController.displayAboutPage );

//products
router.get('/products', indexController.displayProductsPage);

//services
router.get('/services', indexController.displayServicesPage );

//contact
router.get('/contact', indexController.displayContactPage);

module.exports = router;
