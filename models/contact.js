let mongoose = require('mongoose');


//create a model class

let contactSchema = mongoose.Schema({
    FirstName: String,
    LastName: String,
    age: Number

},
{
    collection: "first"
});

module.exports = mongoose.model('test', contactSchema);