import {Note} from "./note";
import {Mutation} from "./mutation";
import {GraphQLDateTime} from 'graphql-iso-date'
import {User} from "./user";
import {Query} from "./query";

module.exports = {
    Query,
    Mutation,
    DateTime:GraphQLDateTime,
    Note,
    User
}