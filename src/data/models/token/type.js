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
  name: 'Token',
  description: 'Token object',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    token: {
      type: GraphQLString
    },
    type: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    active: {
      type: GraphQLBoolean
    },
    created_at: {
      type: GraphQLDateTime
    },
  })
});
