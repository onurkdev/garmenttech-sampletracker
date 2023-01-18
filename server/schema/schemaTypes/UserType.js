const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt , GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType} = require('graphql');

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({

    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    userType: { type: GraphQLString },
    })
});

module.exports = UserType;
