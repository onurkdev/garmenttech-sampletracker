const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt , GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType} = require('graphql');

const Style = require('../../models/Style');
const StyleType = require('../schemaTypes/StyleType');

const styleById = {
    type: StyleType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
        return Style.findById(args.id);
    }
}

const styleByStyleCode = {
    type: StyleType,
    args: { styleCode: { type: GraphQLString } },
    resolve(parent, args) {
        return Style.findOne({ styleCode: args.styleCode });
    }
}


const allStyles = {
    type: new GraphQLList(StyleType),
    resolve(parent, args) {
        return Style.find();
    }
}

const allActiveStyles = {
    type: new GraphQLList(StyleType),
    resolve(parent, args) {
        return Style.find({ status: "Open" });
    }
}

const allStylesOfTech = {
    type: new GraphQLList(StyleType),
    args: { techId: { type: GraphQLID } },
    resolve(parent, args) {
        return Style.find({ techId: args.techId });
    }
}

const allStylesOfTechStatus = { // this is for tech to see all styles of a particular status
    type: new GraphQLList(StyleType),
    args: { techId: { type: GraphQLID }, status: { type: GraphQLString } },
    resolve(parent, args) {
        return Style.find({ techId: args.techId, status: args.status });
    }
}


const allStylesOfBuyer = {
    type: new GraphQLList(StyleType),
    args: { buyerId: { type: GraphQLID } },
    resolve(parent, args) {
        return Style.find({ buyerId: args.buyerId });
    }
}

const allStylesOfBuyerStatus = {
    type: new GraphQLList(StyleType),
    args: { buyerId: { type: GraphQLID }, status: { type: GraphQLString } },
    resolve(parent, args) {
        return Style.find({ buyerId: args.buyerId, status: args.status });
    }
}


const allStylesOfTechAndBuyer = {
    type: new GraphQLList(StyleType),
    args: { techId: { type: GraphQLID }, buyerId: { type: GraphQLID } },
    resolve(parent, args) {
        return Style.find({ techId: args.techId, buyerId: args.buyerId });
    }
}

const allStylesOfTechAndBuyerAndStatus = {
    type: new GraphQLList(StyleType),
    args: { techId: { type: GraphQLID }, buyerId: { type: GraphQLID }, status: { type: GraphQLString } },
    resolve(parent, args) {
        return Style.find({ techId: args.techId, buyerId: args.buyerId, status: args.status });
    }
}


const allStylesOfOrder = {
    type: new GraphQLList(StyleType),
    args: { orderId: { type: GraphQLID } },
    resolve(parent, args) {
        return Style.find({ orderId: args.orderId });
    }
}


module.exports = {
    styleById,
    styleByStyleCode,
    allStyles,
    allActiveStyles,
    allStylesOfTech,
    allStylesOfTechStatus,
    allStylesOfBuyer,
    allStylesOfBuyerStatus,
    allStylesOfTechAndBuyer,
    allStylesOfTechAndBuyerAndStatus,
    allStylesOfOrder
}









