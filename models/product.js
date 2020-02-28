var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String },
        author: { type: String },
        userRef: {}
    },
    {
        timestamps: true
    }
    );

module.exports = mongoose.model('Product', productSchema);