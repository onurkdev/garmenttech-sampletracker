

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt , GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType} = require('graphql');

const {
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

//import all exports from OrderMutations.js
const {
    createOrder,
    updateOrder,
    deleteOrder
} = require('./mutations/OrderMutations');
//import all exports from SupplierMutations.js
const {
    createSupplier,
    updateSupplier,
    deleteSupplier
} = require('./mutations/SupplierMutations');

//import all exports from ClientMutations.js
const {
    createClient,
    updateClient,
    deleteClient
} = require('./mutations/ClientMutations');


const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
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
        createStyle: createStyle,
        updateStyle: updateStyle,
        deleteStyle: deleteStyle,
        //Order Mutations
        createOrder: createOrder,
        updateOrder: updateOrder,
        deleteOrder: deleteOrder,
        //Supplier Mutations
        createSupplier: createSupplier,
        updateSupplier: updateSupplier,
        deleteSupplier: deleteSupplier,
        //Client Mutations
        createClient: createClient,
        updateClient: updateClient,
        deleteClient: deleteClient,
    }
});




const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation ,
});

module.exports = schema;