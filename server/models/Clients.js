const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    clientName: {
        type: String,
        required: true,
        unique: true
    },
    clientCode: {
        type: String,
        required: true,
        unique: true
    },
    
})

clientSchema.virtual('orders', {
    ref: 'Order',
    localField: '_id',
    foreignField: 'clientId'
})

clientSchema.set('toJSON', { virtuals: true })
clientSchema.set('toObject', { virtuals: true })

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;


