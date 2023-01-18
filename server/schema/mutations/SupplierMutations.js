const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt , GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType} = require('graphql');

const SupplierType  = require('../schemaTypes/SupplierType');
const Supplier = require('../../models/Supplier');

const createSupplier = {
    type: SupplierType,
    args: {
        supplierName: { type: GraphQLString },
        supplierCode: { type: GraphQLString },
    },
    resolve(parent, args) {
        let supplier = new Supplier({
            supplierName: args.supplierName,
            supplierCode: args.supplierCode,
        });
        return supplier.save();
    }
}
const updateSupplier = {
    type: SupplierType,
    args: {
        id: { type: GraphQLID },
        supplierName: { type: GraphQLString },
        supplierCode: { type: GraphQLString },
    },
    resolve(parent, args) {
        return Supplier.findByIdAndUpdate(args.id, {
            supplierName: args.supplierName,
            supplierCode: args.supplierCode,
        });
    }
}
const deleteSupplier = {
    type: SupplierType,
    args: {
        id: { type: GraphQLID },
    },
    resolve(parent, args) {
        return Supplier.findByIdAndDelete(args.id);
    }
}

module.exports = {
    createSupplier,
    updateSupplier,
    deleteSupplier
}

