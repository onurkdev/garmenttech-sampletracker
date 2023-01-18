const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt , GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType} = require('graphql');
const OrderType  = require('../schemaTypes/OrderType');
const Order = require('../../models/Order');

const createOrder = {
    type: OrderType,
    args: {
        orderNumber: { type: GraphQLString },
        supplierId: { type: GraphQLID },
        buyerId: { type: GraphQLID },
        clientId: { type: GraphQLID },
        PONumber: { type: GraphQLString },
        orderDate: { type: GraphQLString },
        deliveryDateInitial: { type: GraphQLString },
        deliveryDateupdated: { type: GraphQLString },
        orderStatus: { type: GraphQLString },
        orderQuantity: { type: GraphQLInt },
        orderSeason: { type: GraphQLString },
    },
    resolve(parent, args) {
        let order = new Order({
            orderNumber: args.orderNumber,
            supplierId: args.supplierId,
            buyerId: args.buyerId,
            clientId: args.clientId,
            PONumber: args.PONumber,
            orderDate: args.orderDate,
            deliveryDateInitial: args.deliveryDateInitial,
            deliveryDateupdated: args.deliveryDateupdated,
            orderStatus: args.orderStatus,
            orderQuantity: args.orderQuantity,
            orderSeason: args.orderSeason,
        });
        return order.save();
    }
}
const updateOrder = {
    type: OrderType,
    args: {
        id: { type: GraphQLID },
        orderNumber: { type: GraphQLString },
        supplierId: { type: GraphQLID },
        buyerId: { type: GraphQLID },
        clientId: { type: GraphQLID },
        PONumber: { type: GraphQLString },
        orderDate: { type: GraphQLString },
        deliveryDateInitial: { type: GraphQLString },
        deliveryDateupdated: { type: GraphQLString },
        orderStatus: { type: GraphQLString },
        orderQuantity: { type: GraphQLInt },
        orderSeason: { type: GraphQLString },
    },
    resolve(parent, args) {
        return Order.findByIdAndUpdate(args.id, {
            orderNumber: args.orderNumber,
            supplierId: args.supplierId,
            buyerId: args.buyerId,
            clientId: args.clientId,
            PONumber: args.PONumber,
            orderDate: args.orderDate,
            deliveryDateInitial: args.deliveryDateInitial,
            deliveryDateupdated: args.deliveryDateupdated,
            orderStatus: args.orderStatus,
            orderQuantity: args.orderQuantity,
            orderSeason: args.orderSeason,
        });
    }
}
const deleteOrder = {
    type: OrderType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
        return Order.findByIdAndRemove(args.id);
    }
}

module.exports = { createOrder, updateOrder, deleteOrder };