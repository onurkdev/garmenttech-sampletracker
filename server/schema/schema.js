const  SampleType = require('./schemaTypes/SampleType');
const  StyleType = require('./schemaTypes/StyleType');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt , GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType} = require('graphql');

const {
    sampleById,
    sampleById,
    sampleBySampleCode,
    allSamples,
    allPendingSamples,
    allSamplesOfTech,
    allSamplesOfTechStatus,
    allSamplesOfBuyer,
    allSamplesOfBuyerStatus,
    allSamplesOfTechAndBuyer,
    allSamplesOfTechAndBuyerStatus,
    allSamplesOfStyle
} = require('./queries/SampleQueries');
//import all exports from StyleQueries.js
const {
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
} = require('./queries/StyleQueries');
//import all exports from OrderQueries.js
const {
    orderById, 
    orderByPONumber, 
    allOrders, 
    allOrdersOfBuyer, 
    allOrdersOfBuyerStatus, 
    allStylesInOrder, 
    allActiveOrdersBySeason
} = require('./queries/OrderQueries');
//import all exports from SupplierQueries.js
const {
    supplierById,
    supplierBySupplierCode,
    allSuppliers,
    allActiveSuppliers
} = require('./queries/SupplierQueries');
//import all exports from ClientQueries.js
const {
    clientById,
    clientByClientCode,
} = require('./queries/ClientQueries');

//import all exports from SampleMutations.js
const {
    createSample,
    updateSample,
    deleteSample
} = require('./mutations/SampleMutations');

//import all exports from StyleMutations.js
const {
    createStyle,
    updateStyle,
    deleteStyle
} = require('./mutations/StyleMutations');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        //Sample Queries
        sampleById: sampleById,
        sampleBySampleCode: sampleBySampleCode,
        allSamples: allSamples,
        allPendingSamples: allPendingSamples,
        allSamplesOfTech: allSamplesOfTech,
        allSamplesOfTechStatus: allSamplesOfTechStatus,
        allSamplesOfBuyer: allSamplesOfBuyer,
        allSamplesOfBuyerStatus: allSamplesOfBuyerStatus,
        allSamplesOfTechAndBuyer: allSamplesOfTechAndBuyer,
        allSamplesOfTechAndBuyerStatus: allSamplesOfTechAndBuyerStatus,
        allSamplesOfStyle: allSamplesOfStyle,
        //Style Queries
        styleById: styleById,
        styleByStyleCode: styleByStyleCode,
        allStyles: allStyles,
        allActiveStyles: allActiveStyles,
        allStylesOfTech: allStylesOfTech,
        allStylesOfTechStatus: allStylesOfTechStatus,
        allStylesOfBuyer: allStylesOfBuyer,
        allStylesOfBuyerStatus: allStylesOfBuyerStatus,
        allStylesOfTechAndBuyer: allStylesOfTechAndBuyer,
        allStylesOfTechAndBuyerAndStatus: allStylesOfTechAndBuyerAndStatus,
        allStylesOfOrder: allStylesOfOrder,
        //Order Queries
        orderById: orderById,
        orderByPONumber: orderByPONumber,
        allOrders: allOrders,
        allOrdersOfBuyer: allOrdersOfBuyer,
        allOrdersOfBuyerStatus: allOrdersOfBuyerStatus,
        allStylesInOrder: allStylesInOrder,
        allActiveOrdersBySeason: allActiveOrdersBySeason,
        //Supplier Queries
        supplierById: supplierById,
        supplierBySupplierCode: supplierBySupplierCode,
        allSuppliers: allSuppliers,
        allActiveSuppliers: allActiveSuppliers,
        //Client Queries
        clientById: clientById,
        clientByClientCode: clientByClientCode,
        



    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        //Sample Mutations
        createSample: createSample,
        updateSample: updateSample,
        deleteSample: deleteSample,
        //Style Mutations
        createStylke: createStyle,
        updateStyle: updateStyle,
        deleteStyle: deleteStyle,
        //TODO Order Mutations
        //TODO Supplier Mutations
        //TODO Client Mutations

    }
});




const mainSchema = new GraphQLSchema({
    query: RootQuery,
    //mutation: ,
});