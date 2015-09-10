var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {type: String},
    password: {type: String},
    token: {type: String},
    group: {type: String},
    role: {type: String},
    profile: {
    	name: {
    		first: {type: String},
    		last: {type: String}
    	},
    	phone: {type: Number},
        email: {type: String},
        photo: {type: String},
        location: {
            country: {type: String},
            state: {type: String},
            city: {type: String},
            zipCode: {type: Number},
            address: {type: String},
            number: {type: Number},
        }
    },
    server: [{
        name: {type : String}
    }],
    domain: {type: String},
    site: {type: String},
    service: {type: String},
    created: {type: Date, default: Date.now},
    state: Boolean
});

module.exports = mongoose.model('User', userSchema);
// mongoose.Schema.Type.ObjectId, ref: 'Roles'