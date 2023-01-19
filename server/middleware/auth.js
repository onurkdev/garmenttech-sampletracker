const { shield, rule, and, inputRule } = require("graphql-shield");
const User  = require("../models/User");
const jwt = require('jsonwebtoken')



const isAuthenticated = rule()(async (parent, args, ctx, info) => {
    const token = ctx.headers.authorization;
    const tokenClean = token.replace("Bearer ", "");
    const decoded = jwt.verify(tokenClean,process.env.JWTPASS)
    const user = await User.findOne({_id: decoded._id,'tokens.token':token})
    
    let userExists = !!user
    
    return userExists
});

const permissions = shield({
  RootQuery: {
    "*": isAuthenticated,
  },
  Mutation: {
    "*": isAuthenticated,
  },
},{debug: true});

module.exports = {
    permissions,
    isAuthenticated
}
