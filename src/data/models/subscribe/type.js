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
  name: 'Subscribe',
  description: 'Subscribe object',
  fields: () => ({
    _id: {
      type: GraphQLInt
    },
    done: {
      type: GraphQLBoolean
    },
    state: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    phone: {
      type: GraphQLString
    },
    month: {
      type: GraphQLInt
    },
    bonusDay: {
      type: GraphQLInt
    },
    price: {
      type: GraphQLInt
    },
    info: {
      type: GraphQLString
    },
    coupon: {
      type: GraphQLJSON
    },
    created_at: {
      type: GraphQLDateTime
    },
  })
});
