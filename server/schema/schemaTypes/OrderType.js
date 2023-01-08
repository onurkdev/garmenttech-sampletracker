const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");
const UserType = require("./UserType");
const User = require("../../models/User");
const SupplierType = require("./SupplierType");
const Supplier = require("../../models/Supplier");
const ClientType = require("./ClientType");
const Client = require("../../models/Client");

const OrderType = new GraphQLObjectType({
  name: "Order",
  fields: () => ({
    id: { type: GraphQLID },
    orderNumber: { type: GraphQLString },
    supplier: {
      type: SupplierType,
      resolve(parent, args) {
        return Supplier.findById(parent.supplierId);
      },
    },
    resposibleBuyer: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.responsibleBuyer);
      },
    },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return Client.findById(parent.clientId);
      },
    },
    PONumber: { type: GraphQLString },
    orderDate: { type: GraphQLString },
    deliveryDateInitial: { type: GraphQLString },
    deliveryDateUpdated: { type: GraphQLString },
    orderStatus: { type: GraphQLString }, // Open, Delivered, Cancelled
    orderQuantity: { type: GraphQLInt },
    orderSeason: { type: GraphQLString },
  }),
});

module.exports = OrderType;
