const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const { buildClientSchema, introspectionQuery, printSchema } = require('graphql/utilities');
const URI = require('../app/constants/uri');

const schemaPath = path.join(__dirname, '../scripts/schema');
const SERVER = URI.GRAPHQL_SERVER_URI;

fetch(SERVER, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ query: introspectionQuery }),
})
  .then(res => res.json())
  .then((schemaJSON) => {
    fs.writeFileSync(`${schemaPath}.json`, JSON.stringify(schemaJSON, null, 2));

    const graphQLSchema = buildClientSchema(schemaJSON.data);
    fs.writeFileSync(`${schemaPath}.graphql`, printSchema(graphQLSchema));
  });