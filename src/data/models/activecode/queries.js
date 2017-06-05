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
  oneActiveCode: {
    type: type,
    args: {
      code: {
        type: GraphQLString
      }
    },
    resolve: model.getOneCategory
  },
  allActiveCode: {
    type: new GraphQLList(type),
    resolve: model.all
  },
};
