const { shield, rule, and, inputRule } = require("graphql-shield");
const { User } = require("../models/User");



const isAuthenticated = rule()(async (parent, args, ctx, info) => {
    const userId = ctx.headers["user-id"];
    const token = ctx.headers["authorization"];
    const tokenClean = token.replace("Bearer ", "");

    const user = User.find(({ id }) => id === userId);

    return !!user.tokens.find(token => token = tokenClean)  
});

const permissions = shield({
  Query: {
    "*": isAuthenticated,
  },
  Mutation: {
    "*": isAuthenticated,
  },
});

module.exports = {
    permissions,
    isAuthenticated
}
