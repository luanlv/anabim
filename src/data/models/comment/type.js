import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
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
  name: 'Comment',
  description: 'Comment object',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    code: {
      type: GraphQLString
    },
    day: {
      type: GraphQLInt
    },
    email: {
      type: GraphQLString
    },
    all: {
      type: GraphQLBoolean
    },
    quantity: {
      type: GraphQLInt
    },
    used: {
      type: GraphQLBoolean
    },
    created_at: {
      type: GraphQLDateTime
    },
  })
});
