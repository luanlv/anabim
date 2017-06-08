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
  oneCategoryPost: {
    type: type,
    args: {
      slug: {
        type: GraphQLString
      }
    },
    resolve: model.one
  },
  allCategoryPost: {
    type: new GraphQLList(type),
    resolve: model.all
  },
};
