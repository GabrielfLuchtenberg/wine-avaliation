import { GraphQLString, GraphQLNonNull, GraphQLInt } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { Wine } from "../model";
import WineType from "../modules/wine/WineType";

export default mutationWithClientMutationId({
  name: "AddWine",
  inputFields: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    brand: {
      type: GraphQLString
    },
    classification: {
      type: GraphQLString
    },
    color: {
      type: GraphQLString
    },
    sugarTeor: {
      type: GraphQLString
    },
    note: {
      type: GraphQLString
    }
  },
  mutateAndGetPayload: async ({
    name,
    brand,
    classification,
    color,
    sugarTeor,
    note
  }) => {
    const wine = new Wine({
      name,
      brand,
      classification,
      color,
      sugarTeor,
      note
    });
    await wine.save();
    return {
      wine,
      error: null
    };
  },
  outputFields: {
    wine: {
      type: WineType,
      resolve: ({ wine }) => wine
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error
    }
  }
});
