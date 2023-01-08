const mongoose = require('mongoose');

const sampleSchema = new mongoose.Schema({
    sampleCode: {
        type: String,
        required: true,
        unique: true
    },
    styleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Style'
    },
    stage: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    addedOn: {
        type: Date,
        default: Date.now
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    updatedOn: {
        type: Date,
        default: Date.now
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    completedDate: {
        type: Date
    },
    buyerComments: {
        type: String
    },
    sampleSize: {
        type: String
    },
    sampleQuantity: {
        type: Number
    },
    notes: {
        type: String
    },

},{
    timestamps:true
});

const Sample = mongoose.model('Sample', sampleSchema);

module.exports = Sample;


