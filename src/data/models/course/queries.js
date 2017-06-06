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
  oneCourse: {
    type: type,
    args: {
      slug: {
        type: GraphQLString
      }
    },
    resolve: model.one
  },
  oneCourse2: {
    type: type,
    args: {
      slug: {
        type: GraphQLString
      }
    },
    resolve: model.one2
  },
  allCourse: {
    type: new GraphQLList(type),
    resolve: model.all
  },
  courseInCategory: {
    type: new GraphQLList(type),
    args: {
      slug: {
        type: GraphQLString
      }
    },
    resolve: model.courseInCategory
  },
  courseInSoftware: {
    type: new GraphQLList(type),
    args: {
      slug: {
        type: GraphQLString
      }
    },
    resolve: model.courseInSoftware
  }

};
