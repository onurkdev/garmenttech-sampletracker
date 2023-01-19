const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt , GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType} = require('graphql');
const  StyleType  = require('../schemaTypes/StyleType');
const  Style = require('../../models/Style');

const createStyle = {
    type: StyleType,
    args: {
        styleCode: { type: GraphQLNonNull(GraphQLString) },
        styleName: { type: GraphQLString },
        orderId: { type: GraphQLID },
        responsibleBuyer: { type: GraphQLID },
        responsibleTech: { type: GraphQLID },
        styleConfigSKU: { type: GraphQLString },
        styleColor: { type: GraphQLString },
        finalStatus: { type: GraphQLString },
    },
    resolve(parent, args) {
        const style = new Style({
            styleCode: args.styleCode,
            styleName: args.styleName,
            orderId: args.orderId,
            responsibleBuyer: args.responsibleBuyer,
            responsibleTech: args.responsibleTech,
            styleConfigSKU: args.styleConfigSKU,
            styleColor: args.styleColor,
            finalStatus: args.finalStatus,
        });
        return style.save();
    }
}

const updateStyle = {
  type: StyleType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
    styleCode: { type: GraphQLNonNull(GraphQLString) },
    styleName: { type: GraphQLString },
    order: { type: GraphQLID },
    responsibleBuyer: { type: GraphQLID },
    responsibleTech: { type: GraphQLID },
    styleConfigSKU: { type: GraphQLString },
    styleColor: { type: GraphQLString },
    finalStatus: { type: GraphQLString },
  },
  resolve(parent, args) {
    return Style.findByIdAndUpdate(args.id, {
      $set: {
        styleCode: args.styleCode,
        styleName: args.styleName,
        order: args.order,
        responsibleBuyer: args.responsibleBuyer,
        responsibleTech: args.responsibleTech,
        styleConfigSKU: args.styleConfigSKU,
        styleColor: args.styleColor,
        finalStatus: args.finalStatus,
      },
    }, { new: true });
  },
};

const deleteStyle = {
    type: StyleType,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve(parent, args) {
        return Style.findByIdAndDelete(args.id);
    }
}

module.exports = { createStyle, updateStyle, deleteStyle };