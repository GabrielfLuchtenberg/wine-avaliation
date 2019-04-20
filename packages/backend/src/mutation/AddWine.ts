import { GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'
import { Wine } from '../model'
import WineType from '../modules/wine/WineType';

export default mutationWithClientMutationId({
  name: 'AddWine',
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
  mutateAndGetPayload: async ({ name, brand, quantity, mainIngredients, note }) => {

    const wine = new Wine({ name, brand, quantity, mainIngredients, note })
    await wine.save()
    return {
      wine,
      error: null,
    }
  },
  outputFields: {
    wine: {
      type: WineType,
      resolve: ({ wine }) => wine,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
})
