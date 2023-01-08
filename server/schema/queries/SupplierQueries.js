const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt , GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType} = require('graphql');

const Supplier = require('../../models/Supplier');
const SupplierType = require('../schemaTypes/SupplierType');

const supplierById = {
    type: SupplierType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
        return Supplier.findById(args.id);
    }
}

const supplierBySupplierCode = {
    type: SupplierType,
    args: { supplierCode: { type: GraphQLString } },
    resolve(parent, args) {
        return Supplier.findOne({ supplierCode: args.supplierCode });
    }
}

const allSuppliers = {
    type: new GraphQLList(SupplierType),
    resolve(parent, args) {
        return Supplier.find();
    }
}

const allActiveSuppliers = {
    type: new GraphQLList(SupplierType),
    resolve(parent, args) {
        return Supplier.find({ status: "Active" });
    }
}

module.exports = {
    supplierById,
    supplierBySupplierCode,
    allSuppliers,
    allActiveSuppliers
}


