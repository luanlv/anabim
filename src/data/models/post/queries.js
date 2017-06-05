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
  getPosts: {
    type: new GraphQLObjectType({
        name: 'getPosts',
        description: 'getPosts object',
        fields: () => ({
          page: {
            type: GraphQLInt
          },
          totalPage: {
            type: GraphQLInt
          },
          data: {
            type: new GraphQLList(type)
          }
        })
      }),
      args: {
        page: {
          type: GraphQLInt
        }
      },
      resolve: model.getPosts
  },
  getOnePost: {
    type: type,
    args: {
      slug: {
        type: GraphQLString
      }
    },
    resolve: model.getOnePost
  },
  getAllPosts: {
    type: new GraphQLList(type),
    resolve: model.getAllPosts
  },
  getAllPostsByCategory: {
    type: new GraphQLList(type),
    args: {
      slug: {
        type: GraphQLString
      }
    },
    resolve: model.getAllPostsByCategory
  },

  get5RecentPost: {
    type: new GraphQLList(type),
    resolve: model.get5RecentPost
  },

  getPostRelative: {
    type: new GraphQLList(type),
    resolve: model.getPostRelative,
  }
};
