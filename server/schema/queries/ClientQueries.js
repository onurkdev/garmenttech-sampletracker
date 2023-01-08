const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt , GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType} = require('graphql');

const Client = require('../../models/Client');
const ClientType = require('../schemaTypes/ClientType');

const clientById = {
    type: ClientType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
        return Client.findById(args.id);
    }
}

const clientByClientCode = {
    type: ClientType,
    args: { clientCode: { type: GraphQLString } },
    resolve(parent, args) {
        return Client.findOne({ clientCode: args.clientCode });
    }
}

module.exports = {
    clientById,
    clientByClientCode
}
