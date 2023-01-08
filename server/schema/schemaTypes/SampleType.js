const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt , GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType} = require('graphql');
const StyleType = require('./StyleType');
const Style = require('../../models/Style');
const UserType = require('./UserType');
const User = require('../../models/User');

const SampleType = new GraphQLObjectType({
  name: "Sample",
  fields: () => ({
    id: { type: GraphQLID },
    sampleCode: { type: GraphQLString },
    style: {
      type: StyleType,
      resolve(parent, args) {
        return Style.findById(parent.styleId);
      },
    },
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


