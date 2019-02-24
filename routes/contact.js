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

//GET request - display the EDIT page

router.get("/edit/:id", (req, res, next) => {
  let id = req.params.id;

  contactModel.findById(id, (err, contactObject) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // show the edit page
      res.render("contacts/edit", {
        title: "Edit Contact",
        contact: contactObject
      });
    }
  });
});

/*POST request - UPDATE database with data */

router.post("/edit/:id", (req, res, next) => {
  let id = req.params.id;

  let updatedContact = contactModel({
    _id: id,
    Name: req.body.Name,
    Description: req.body.Description
  });

  contactModel.update({ _id: id }, updatedContact, err => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the contact list
      res.redirect("/contact-list");
    }
  });
});

/* GET request to perform the delete action*/

router.get('/delete/:id', (req, res, next) => {
  let id = req.params.id;

  contactModel.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } 
    else {
      //refresh contact list
      res.redirect('/contact-list');
    }
  });
});

module.exports = router;
