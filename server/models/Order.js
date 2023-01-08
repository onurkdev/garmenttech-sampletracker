const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderNumber: {
        type: String,
        required: true,
        unique: true
    },
    supplierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier'
    },
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
    PONumber: {
        type: String
    },
    orderDate: {
        type: Date,
    },
    deliveryDateInitial: {
        type: Date,
    },
    deliveryDateUpdated: {
        type: Date,
    },
    orderStatus: {
        type: String,
    },
    orderQuantity: {
        type: Number,
    },
    orderSeason: {
        type: String,
    }

});

orderSchema.virtual('styles', {
    ref: 'Style',
    localField: '_id',
    foreignField: 'orderId'
})

orderSchema.set('toJSON', { virtuals: true })
orderSchema.set('toObject', { virtuals: true })

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
