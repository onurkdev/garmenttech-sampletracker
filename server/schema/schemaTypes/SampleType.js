const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt , GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType} = require('graphql');

const UserType = require('./UserType');
const User = require('../../models/User');

const SampleType = new GraphQLObjectType({
  name: "Sample",
  fields: () => ({
    id: { type: GraphQLID },
    sampleCode: { type: GraphQLString },
    styleId: { type: GraphQLID },
    stage: { type: GraphQLString },
    status: { type: GraphQLString },
    addedBy: {
        type: UserType,
        resolve(parent, args) {
            return User.findById(parent.addedBy);
        } 
    },
    addedOn: { type: GraphQLString },
    updatedBy: {
        type: UserType,
        resolve(parent, args) {
            return User.findById(parent.updatedBy);
        } 
    },
    updatedOn: { type: GraphQLString },
    assignedTo: {
        type: UserType,
        resolve(parent, args) {
            return User.findById(parent.assignedTo);
        } 
    },
    completedDate: { type: GraphQLString },
    buyerComments: { type: GraphQLString },
    sampleSize: { type: GraphQLString },
    sampleQuantity: { type: GraphQLInt },
    notes: { type: GraphQLString },
  }),
});

module.exports = SampleType;



