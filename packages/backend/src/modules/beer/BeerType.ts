//

import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import { globalIdField } from 'graphql-relay'
import { registerType, nodeInterface } from '../../interface/NodeInterface'
export default registerType(
  new GraphQLObjectType({
    name: 'Beer',
    description: 'Beer data',
    fields: () => ({
      id: globalIdField('Beer'),
      _id: {
        type: GraphQLString,
        resolve: beer => beer._id,
      },
      name: {
        type: GraphQLString,
        resolve: beer => beer.name,
      },
      brand: {
        type: GraphQLString,
        resolve: beer => beer.brand,
      },
      quantity: {
        type: GraphQLInt,
        resolve: beer => beer.quantity,
      },
      mainIngredients: {
        type: GraphQLString,
        resolve: beer => beer.mainIngredients,
      },
      note: {
        type: GraphQLString,
        resolve: beer => beer.note,
      },
    }),
    interfaces: () => [nodeInterface],
  }),
)