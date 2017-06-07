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
  oneSubscribe: {
    type: type,
    args: {
      slug: {
        type: GraphQLString
      }
    },
    resolve: model.one
  },
  allSubscribe: {
    type: new GraphQLList(type),
    resolve: model.all
  },
  allPendingSubscribe: {
    type: new GraphQLList(type),
    resolve: model.allPending
  },
  allDoneSubscribe: {
    type: new GraphQLList(type),
    resolve: model.allDone
  }
};
