const {ApolloServer} = require('apollo-server-express')
import express from 'express'
require('dotenv').config();
const db = require('./db');
const models = require('./models')
const DB_HOST = process.env.DB_HOST
db.connect(DB_HOST)
const app = express();
const port = process.env.PORT || 4000;
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { addResolversToSchema } from '@graphql-tools/schema'
import {join} from 'path'

let filePath = !__dirname.includes('build')?join(__dirname, 'schema.gql'):join(__dirname,'../src', 'schema.gql')

const typeDefs = loadSchemaSync(filePath, { loaders: [new GraphQLFileLoader()] })

const resolvers = require('./resolvers')

const schema = addResolversToSchema({
    schema: typeDefs,
    resolvers: resolvers
});

(async () => {
    const server = new ApolloServer({
        schema,
        context: async () => ({
            models
        })
    })
    await server.start()

    server.applyMiddleware({app, path: '/api'});

    app.get('/', (req, res) => {
        res.send('Hello World!!!')
    })

    app.listen(port, () => {
        console.log(`GraphQL Sever running at http://localhost:${port}${server.graphqlPath}`)
    })

})()
