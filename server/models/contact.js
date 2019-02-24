let mongoose = require('mongoose');


//create a model class

let contactSchema = mongoose.Schema({
    Name: String,
    Description: String
},
{
    collection: "favouritethings"
});

module.exports = mongoose.model('bhavna', contactSchema);