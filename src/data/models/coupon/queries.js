import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date';

import type from './type'
import model from './schema'

export default {
  oneCoupon: {
    type: type,
    args: {
      slug: {
        type: GraphQLString
      }
    },
    resolve: model.one
  },
  allCoupon: {
    type: new GraphQLList(type),
    resolve: model.all
  },
};
