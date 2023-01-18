const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt , GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType} = require('graphql');

const ClientType  = require('../schemaTypes/ClientType');
const Client = require('../../models/Client');

const createClient = {
    type: ClientType,
    args: {
        clientName: { type: GraphQLString },
        clientCode: { type: GraphQLString },
    },
    resolve(parent, args) {
        let client = new Client({
            clientName: args.clientName,
            clientCode: args.clientCode,
        });
        return client.save();
    }
}
const updateClient = {
    type: ClientType,
    args: {
        id: { type: GraphQLID },
        clientName: { type: GraphQLString },
        clientCode: { type: GraphQLString },
    },
    resolve(parent, args) {
        return Client.findByIdAndUpdate(args.id, {
            clientName: args.clientName,
            clientCode: args.clientCode,
        });
    }
}
const deleteClient = {
    type: ClientType,
    args: {
        id: { type: GraphQLID },
    },
    resolve(parent, args) {
        return Client.findByIdAndDelete(args.id);
    }
}

module.exports = {
    createClient,
    updateClient,
    deleteClient
}
