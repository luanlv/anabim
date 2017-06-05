import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLBoolean,
  GraphQLFloat
} from 'graphql'

import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date';

// Define our user type, with two string fields; `id` and `name`
import GraphQLJSON from 'graphql-type-json';

export default new GraphQLObjectType({
  name: 'Video',
  description: 'Video object',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    stt: {
      type: GraphQLFloat
    },
    courseId: {
      type: GraphQLInt
    },
    section: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    link: {
      type: GraphQLString
    },
    url: {
      type: GraphQLString
    },
    source: {
      type: GraphQLString
    },
    time: {
      type: GraphQLInt
    },
    created_at: {
      type: GraphQLDateTime
    },
  })
});
