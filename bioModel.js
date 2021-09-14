var mongoose = require('mongoose');

//schema
var bioSchema = mongoose.Schema({
    CustomerName: {
        type: String,
        required: true
    },
    CustomerID: {
        type: String,
        required: true
    },
    ProductName: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    Quantity: {
        type: String,
        required: true
    },
    ProductAmount: {
        type: String,
        required: true
    },
    TotalAmount: {

        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Export Store          Model
var Bio = module.exports = mongoose.model('bio', bioSchema);

module.exports.get = function (callback, limit) {
    Bio.find(callback).limit(limit); 
}