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
  name: 'User',
  description: 'User object',
  fields: () => ({
    _id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    username: {
      type: GraphQLString
    },
    uid: {
      type: GraphQLString
    },
    provider: {
      type: GraphQLString
    },
    accessToken: {
      type: GraphQLString
    },
    member: {
      type: GraphQLString
    },
    isAdmin: {
      type: GraphQLBoolean
    },
    mustConfirmEmail: {
      type: GraphQLBoolean
    },
    password: {
      type: GraphQLString
    },
    role: {
      type: new GraphQLList(GraphQLString)
    },
    info: {
      type: GraphQLJSON
    },
    createAt: {
      type: GraphQLDateTime
    }
  })
})
