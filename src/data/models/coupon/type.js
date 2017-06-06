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
  name: 'Coupon',
  description: 'Coupon object',
  fields: () => ({
    _id: {
      type: GraphQLInt
    },
    code: {
      type: GraphQLString
    },
    kind: {
      type: GraphQLInt
    },
    price: {
      type: GraphQLInt
    },
    month: {
      type: new GraphQLList(GraphQLInt)
    },
    active: {
      type: GraphQLBoolean
    },
    quantity: {
      type: GraphQLInt
    },
    endTime: {
      type: GraphQLDateTime
    },
    created_at: {
      type: GraphQLDateTime
    },
  })
});
