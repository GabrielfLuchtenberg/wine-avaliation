import { GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'
import { Beer } from '../model'
import BeerType from '../modules/beer/BeerType';

export default mutationWithClientMutationId({
  name: 'AddBeer',
  inputFields: {
    name: {
        type: new GraphQLNonNull(GraphQLString),
    },
    brand: {
        type: GraphQLString,
    },
    quantity: {
        type: new GraphQLNonNull(GraphQLInt),
    },
    mainIngredients: {
        type: GraphQLString,
    },
    note: {
        type: GraphQLString,
    },
  },
  mutateAndGetPayload: async ({ name, brand,quantity,mainIngredients,note }) => {

    const beer = new Beer({name,brand,quantity,mainIngredients,note})
    await beer.save()
    return {
      beer,
      error: null,
    }
  },
  outputFields: {
    beer: {
      type: BeerType,
      resolve: ({ beer }) => beer,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
})
