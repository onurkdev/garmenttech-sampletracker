const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt , GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType} = require('graphql');

const Sample = require('../../models/Sample');
const SampleType = require('../schemaTypes/SampleType');

const sampleById = {
    type: SampleType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
        return Sample.findById(args.id);
    }
}

const sampleBySampleCode = {
    type: SampleType,
    args: { sampleCode: { type: GraphQLString } },
    resolve(parent, args) {
        return Sample.findOne({ sampleCode: args.sampleCode });
    }
}

const allSamples = {
    type: new GraphQLList(SampleType),
    resolve(parent, args) {
        return Sample.find();
    }
}

const allPendingSamples = {
    type: new GraphQLList(SampleType),
    resolve(parent, args) {
        return Sample.find({ status: "Pending" });
    }
}

const allSamplesOfTech = {
    type: new GraphQLList(SampleType),
    args: { techId: { type: GraphQLID } },
    resolve(parent, args) {
        return Sample.find({ techId: args.techId });
    }
}

const allSamplesOfTechStatus = {
    type: new GraphQLList(SampleType),
    args: { techId: { type: GraphQLID }, status: { type: GraphQLString } },
    resolve(parent, args) {
        return Sample.find({ techId: args.techId, status: args.status });
            
    }
}

const allSamplesOfBuyer = {
    type: new GraphQLList(SampleType),
    args: { buyerId: { type: GraphQLID } },
    resolve(parent, args) {
        return Sample.find({ buyerId: args.buyerId });
    }
}

const allSamplesOfBuyerStatus = {
    type: new GraphQLList(SampleType),
    args: { buyerId: { type: GraphQLID }, status: { type: GraphQLString } },
    resolve(parent, args) {
        return Sample.find({ buyerId: args.buyerId, status: args.status });
    }
}


const allSamplesOfTechAndBuyer = {
    type: new GraphQLList(SampleType),
    args: { techId: { type: GraphQLID }, buyerId: { type: GraphQLID } },
    resolve(parent, args) {
        return Sample.find({ techId: args.techId, buyerId: args.buyerId });
    }
}

const allSamplesOfTechAndBuyerStatus = {
    type: new GraphQLList(SampleType),
    args: { techId: { type: GraphQLID }, buyerId: { type: GraphQLID }, status: { type: GraphQLString } },
    resolve(parent, args) {
        return Sample.find({ techId: args.techId, buyerId: args.buyerId, status: args.status });
    }

}

const allSamplesOfStyle = {
    type: new GraphQLList(SampleType),
    args: { styleId: { type: GraphQLID } },
    resolve(parent, args) {
        return Sample.find({ styleId: args.styleId });
    }
}

module.exports = {
    sampleById,
    sampleBySampleCode,
    allSamples,
    allPendingSamples,
    allSamplesOfTech,
    allSamplesOfTechStatus,
    allSamplesOfBuyer,
    allSamplesOfBuyerStatus,
    allSamplesOfTechAndBuyer,
    allSamplesOfTechAndBuyerStatus,
    allSamplesOfStyle
}