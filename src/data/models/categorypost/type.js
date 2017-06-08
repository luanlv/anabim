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
  name: 'CategoryPost',
  description: 'CategoryPost object',
  fields: () => ({
    _id: {
      type: GraphQLInt
    },
    title: {
      type: GraphQLString
    },
    slug: {
      type: GraphQLString
    },
    created_at: {
      type: GraphQLDateTime
    },
  })
});
