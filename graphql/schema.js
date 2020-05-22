// Construct a schema, using GraphQL schema language
var {
    buildSchema
} = require('graphql');


const schema = buildSchema(`
  type Query {
    hello: String
  }
`);


module.exports.schema = schema;