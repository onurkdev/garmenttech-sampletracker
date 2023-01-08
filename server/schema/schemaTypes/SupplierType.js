const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt , GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType} = require('graphql');

const SupplierType = new GraphQLObjectType({
    name: 'Supplier',
    fields: () => ({
        id: { type: GraphQLID },
        supplierName: { type: GraphQLString },
        supplierCode: { type: GraphQLString },
    })
});

module.exports = SupplierType;

