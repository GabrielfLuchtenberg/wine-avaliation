//

import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import { globalIdField } from 'graphql-relay'
import { registerType, nodeInterface } from '../../interface/NodeInterface'
export default registerType(
  new GraphQLObjectType({
    name: 'Wine',
    description: 'Wine data',
    fields: () => ({
      id: globalIdField('Wine'),
      _id: {
        type: GraphQLString,
        resolve: wine => wine._id,
      },
      name: {
        type: GraphQLString,
        resolve: wine => wine.name,
      },
      brand: {
        type: GraphQLString,
        resolve: wine => wine.brand,
      },
      quantity: {
        type: GraphQLInt,
        resolve: wine => wine.quantity,
      },
      mainIngredients: {
        type: GraphQLString,
        resolve: wine => wine.mainIngredients,
      },
      note: {
        type: GraphQLString,
        resolve: wine => wine.note,
      },
    }),
    interfaces: () => [nodeInterface],
  }),
)