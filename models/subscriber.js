const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscriberToChannel: {
        type: String,
        required: true
    },
    subscribeData: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.export = mongoose.model('Subscriber', subscriberSchema);