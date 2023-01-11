const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt , GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType} = require('graphql');
const  SampleType  = require('../schemaTypes/SampleType');
const  Sample = require('../../models/Sample');

const createSample = {
    type: SampleType,
    args: {
        sampleCode: { type: GraphQLString },
        sampleCode: { type: GraphQLNonNull(GraphQLString) },
        style: {type: GraphQLNonNull(GraphQLID)},
        stage: { type: GraphQLNonNull(GraphQLString) },
        status: { type: GraphQLNonNull(GraphQLString) },
        addedBy: { type: GraphQLNonNull(GraphQLID)},
        addedOn: { type: GraphQLString },
        updatedBy: {type: GraphQLID},
        updatedOn: { type: GraphQLString },
        assignedTo: {type: GraphQLNonNull(GraphQLID)},
        completedDate: { type: GraphQLString },
        buyerComments: { type: GraphQLString },
        sampleSize: { type: GraphQLString },
        sampleQuantity: { type: GraphQLInt },
        notes: { type: GraphQLString },
    },
    resolve(parent, args) {
        {
            const sample = new Sample({
                sampleCode: args.sampleCode,
                style: args.style,
                stage: args.stage,
                status: args.status,
                addedBy: args.addedBy,
                addedOn: args.addedOn,
                updatedBy: args.updatedBy,
                updatedOn: args.updatedOn,
                assignedTo: args.assignedTo,
                completedDate: args.completedDate,
                buyerComments: args.buyerComments,
                sampleSize: args.sampleSize,
                sampleQuantity: args.sampleQuantity,
                notes: args.notes,
            });
            return sample.save();
        }
    }
}

const updateSample = {
    type: SampleType,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        sampleCode: { type: GraphQLNonNull(GraphQLString) },
        style: {type: GraphQLNonNull(GraphQLID)},
        stage: { type: GraphQLNonNull(GraphQLString) },
        status: { type: GraphQLNonNull(GraphQLString) },
        addedBy: { type: GraphQLNonNull(GraphQLID)},
        addedOn: { type: GraphQLString },
        updatedBy: {type: GraphQLID},
        updatedOn: { type: GraphQLString },
        assignedTo: {type: GraphQLNonNull(GraphQLID)},
        completedDate: { type: GraphQLString },
        buyerComments: { type: GraphQLString },
        sampleSize: { type: GraphQLString },
        sampleQuantity: { type: GraphQLInt },
        notes: { type: GraphQLString },
    },
    resolve(parent, args) {
        return Sample.findByIdAndUpdate(args.id, {
            $set: {
                sampleCode: args.sampleCode,
                style: args.style,
                stage: args.stage,
                status: args.status,
                addedBy: args.addedBy,
                addedOn: args.addedOn,
                updatedBy: args.updatedBy,
                updatedOn: args.updatedOn,
                assignedTo: args.assignedTo,
                completedDate: args.completedDate,
                buyerComments: args.buyerComments,
                sampleSize: args.sampleSize,
                sampleQuantity: args.sampleQuantity,
                notes: args.notes,
            }
        }, { new: true });
    }
}

const deleteSample = {
    type: SampleType,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve(parent, args) {
        return Sample.findByIdAndDelete(args.id);
    }
}


module.exports = { createSample, updateSample, deleteSample};