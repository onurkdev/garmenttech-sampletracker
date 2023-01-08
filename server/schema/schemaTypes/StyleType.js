const SampleType = require('./schemaTypes/SampleType');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt , GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType} = require('graphql');
const OrderType = require('./OrderType');
const Order = require('../../models/Order');
const UserType = require('./UserType');
const User = require('../../models/User');


const StyleType = new GraphQLObjectType({
  name: "Style",
  fields: () => ({
    id: { type: GraphQLID },
    styleCode: { type: GraphQLString },
    styleName: { type: GraphQLString },
    orderId: {
      type: OrderType,
      resolve(parent, args) {
        return Order.findById(parent.orderId);
      },
    },
    responsibleBuyer: {
        type: UserType,
        resolve(parent, args) {
            return User.findById(parent.responsibleBuyer);
        }
    },
    responsibleTech: {
        type: UserType,
        resolve(parent, args) {
            return User.findById(parent.responsibleTech);
        }
    },
    styleConfigSKU: { type: GraphQLString },
    styleColor: { type: GraphQLString },
    finalStatus: { type: GraphQLString },
    samples: {
      type: new GraphQLList(SampleType),
      resolve(parent, args) {
        return Sample.find({ styleId: parent.id });
      },
    },
  }),
});

module.exports = StyleType;