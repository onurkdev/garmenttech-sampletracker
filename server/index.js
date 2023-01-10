const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db')
const {applyMiddleware} = require('graphql-middleware');
const {shield } = require('graphql-shield');
const { permissions } = require('./middleware/auth');
const loginRouter = require('./routers/loginRouter');
const port = process.env.PORT || 8000;

const schemaAuth = applyMiddleware(schema, permissions);

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(loginRouter);
app.use ('/graphql', graphqlHTTP({
    schemaAuth,
    graphiql: process.env.NODE_ENV === 'development',
    headerEditorEnabled: true,
}))

app.listen(port, console.log(`Server running on port ${port}`));