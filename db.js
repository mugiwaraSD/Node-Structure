var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://sourav_dutta:delgence55@ds159371.mlab.com:59371/project_management');

var db = mongoose.connection;

db.once('open', function() {
    console.log('MongoDB Successfully Connected!');
    Person.find({}, function(err, docs) {
        if (!err){ 
            console.log(docs);
            process.exit();
        } else {throw err;}
    });
});

var personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    role : {
        type: String,
        required: true
    },
    hash: String,
    salt: String
});

var Person = mongoose.model('User', personSchema);

module.exports = Person;
