const express = require("express")
const app = express();
const bodyParser = require("body-parser")
var graphqlHTTP = require('express-graphql');
var {
    buildSchema
} = require('graphql');
const cors = require('cors')
const schema = require("./graphql/schema").schema;
const root = require("./graphql/root").root;

// Allow boy barser to parse the data
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));


app.listen(4000, () => {
    console.log('Running a GraphQL API server at http://localhost:4000/graphql')
});