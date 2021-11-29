const {Query} = require('./query');
import {Mutation} from "./mutation";
import {GraphQLDateTime} from 'graphql-iso-date'

module.exports = {
    Query,
    Mutation,
    DateTime:GraphQLDateTime
}