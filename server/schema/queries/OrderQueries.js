const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt , GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType} = require('graphql');

const Order = require('../../models/Order');
const OrderType = require('../schemaTypes/OrderType');
const Style = require('../../models/Style');
const StyleType = require('../schemaTypes/StyleType');


const orderById = {
    type: OrderType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
        return Order.findById(args.id);
    }
}

const orderByPONumber = {
    type: OrderType,
    args: { PONumber: { type: GraphQLString } },
    resolve(parent, args) {
        return Order.findOne({ PONumber: args.PONumber });
    }
}


const allOrders = {
    type: new GraphQLList(OrderType),
    resolve(parent, args) {
        return Order.find();
    }
}

const allOrdersOfBuyer = {
    type: new GraphQLList(OrderType),
    args: { buyerId: { type: GraphQLID } },
    resolve(parent, args) {
        return Order.find({ buyerId: args.buyerId });
    }
}

const allOrdersOfBuyerStatus = {
    type: new GraphQLList(OrderType),
    args: { buyerId: { type: GraphQLID }, orderStatus: { type: GraphQLString } },
    resolve(parent, args) {
        return Order.find({ buyerId: args.buyerId, status: args.orderStatus });
    }
}

const allStylesInOrder = {
    type: new GraphQLList(StyleType),
    args: { orderId: { type: GraphQLID } },
    resolve(parent, args) {
        return Style.find({ orderId: args.orderId });
    }
}

const allActiveOrdersBySeason = {
    type: new GraphQLList(OrderType),
    args: { season: { type: GraphQLString } },
    resolve(parent, args) {
        return Order.find({ season: args.season, status: "Open" });
    }
}

module.exports = { orderById, orderByPONumber, allOrders, allOrdersOfBuyer, allOrdersOfBuyerStatus, allStylesInOrder, allActiveOrdersBySeason };
