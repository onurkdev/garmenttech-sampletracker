const mongoose = require('mongoose');

const styleSchema = new mongoose.Schema({
    styleCode: {
        type: String,
        required: true,
        unique: true
    },
    styleName: {
        type: String,
    },
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    },
    responsibleBuyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    responsibleTech: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    styleConfigSKU: {
        type: String
    },
    styleColor: {
        type: String
    },
    finalStatus: {
        type: String
    }


},{
    timestamps:true
})



//virtual gelecek sample dan stylId ile
styleSchema.virtual('receivedSamples', {
    ref: 'Sample',
    localField: '_id',
    foreignField: 'styleId'
})

const Style = mongoose.model('Style', styleSchema);

module.exports = Style;
