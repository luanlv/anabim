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

import GraphQLJSON from 'graphql-type-json';

// Define our user type, with two string fields; `id` and `name`
export default new GraphQLObjectType({
  name: 'Information',
  description: 'Information object',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    common: {type: GraphQLJSON},
    about: {type: GraphQLJSON},
    contact: {type: GraphQLJSON},
    tracking: {type: GraphQLJSON},
    allService: {type: GraphQLJSON},
    services: {type: GraphQLJSON},
    home: {type: GraphQLJSON}
  })
});
