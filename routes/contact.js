let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//schema - create a reference to the db schema
let contactModel = require("../models/contact");

/* GET Contact List page - Read operation */

router.get("/", (req, res, next) => {
  contactModel.find((err, contactList) => {
    if (err) {
      return console.error(err);
    } else {
      // console.log(contactList);

      res.render("contacts/index", {
        title: "List of Favourite Things",
        contactList: contactList
      });
    }
  });
});

/* GET Route for th Add Contact page - READ Operation */
router.get("/add", (req, res, next) => {
  res.render("contacts/add", {
    title: "Add New Contact"
  });
});

/* POST Route for processing the Add page*/

router.post("/add", (req, res, next) => {
  //   console.log(req.body);

  let newContact = contactModel({
    Name: req.body.Name,
    Description: req.body.Description
  });

  contactModel.create(newContact, (err, contactModel) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the contact list
      res.redirect("/contact-list");
    }
  });
});
module.exports = router;
