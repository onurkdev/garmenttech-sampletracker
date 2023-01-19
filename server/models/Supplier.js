const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    supplierName: {
        type: String,
        required: true,
        unique: true
    },
    supplierCode: {
        type: String,
        required: true,
        unique: true
    },
});

// supplierSchema.virtual('orders', {
//     ref: 'Order',
//     localField: '_id',
//     foreignField: 'supplierId'
// })

supplierSchema.set('toJSON', { virtuals: true })
supplierSchema.set('toObject', { virtuals: true })

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;
