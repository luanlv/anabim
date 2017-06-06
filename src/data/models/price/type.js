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
  name: 'Price',
  description: 'Price object',
  fields: () => ({
    _id: {
      type: GraphQLInt
    },
    one: {
      type: GraphQLInt
    },
    three: {
      type: GraphQLInt
    },
    six: {
      type: GraphQLInt
    },
    twelve: {
      type: GraphQLInt
    },
    created_at: {
      type: GraphQLDateTime
    },
  })
});
