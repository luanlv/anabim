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
  name: 'IndexCourse',
  description: 'IndexCourse object',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    category: {
      type: GraphQLJSON
    },
    courses: {
      type: new GraphQLList(GraphQLJSON)
    },
    created_at: {
      type: GraphQLDateTime
    },
  })
});
