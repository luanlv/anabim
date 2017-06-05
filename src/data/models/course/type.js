import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLBoolean
} from 'graphql'

import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date';

// Define our user type, with two string fields; `id` and `name`
import GraphQLJSON from 'graphql-type-json';

export default new GraphQLObjectType({
  name: 'Course',
  description: 'Course object',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    coverUrl: {
      type: GraphQLString
    },
    slug: {
      type: GraphQLString
    },
    cateID: {
      type: new GraphQLList(GraphQLInt)
    },
    softID: {
      type: new GraphQLList(GraphQLInt)
    },
    level: {
      type: GraphQLInt
    },
    authorId: {
      type: GraphQLString
    },
    section: {
      type: new GraphQLList(GraphQLString)
    },
    description: {
      type: GraphQLString
    },
    vote: {
      type: GraphQLFloat
    },
    numVote: {
      type: GraphQLInt
    },
    voter: {
      type: new GraphQLList(GraphQLInt)
    },
    documents: {
      type: GraphQLString
    },
    related: {
      type: new GraphQLList(GraphQLInt)
    },
    created_at: {
      type: GraphQLDateTime
    },
  })
});
