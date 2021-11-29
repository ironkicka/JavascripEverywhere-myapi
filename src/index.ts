import {MutationResolvers, QueryResolvers, Resolver, Resolvers, ResolversTypes} from "./generated/graphql";
const {ApolloServer, gql} = require('apollo-server-express')
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
const typeDefs = loadSchemaSync(join(__dirname, 'schema.gql'), { loaders: [new GraphQLFileLoader()] })

const resolvers:Resolvers = {
    Query:{
        notes:async()=>{
            return models.Note.find();
        },
        note:async(parent,args)=>{
            return models.Note.findById(args.id)
        }
    },
    Mutation:{
        newNote:async(parent,args)=>{
            return await models.Note.create({
                content:args.content,
                author:'Adam Scott'
            })
        }
    }
}

const schema = addResolversToSchema({
    schema: typeDefs,
    resolvers: resolvers
});

const server = new ApolloServer({schema})

server.applyMiddleware({app,path:'/api'});

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

app.listen(port, () => {
    console.log(`GraphQL Sever running at http://localhost:${port}${server.graphqlPath}`)
})
