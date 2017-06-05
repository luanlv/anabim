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
  oneComment: {
    type: type,
    args: {
      id: {
        type: GraphQLInt
      }
    },
    resolve: model.one
  },
  allComment: {
    type: new GraphQLList(type),
    resolve: model.all
  },
};
