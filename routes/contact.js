let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//schema - create a reference to the db schema
let contact = require('../models/contact');

/* GET Contact List page - Read operation */

router.get('/', (req, res, next) => {
    contact.find((err, contatcList) => {
            if(err){
                return console.error(err);
            }
            else{
                console.log(contatcList);

                /*
                res.render('contact/index', {
                    title: 'Contact List'.
                    contactList: contactList
                });
                */
            }
    });
});


module.exports = router;