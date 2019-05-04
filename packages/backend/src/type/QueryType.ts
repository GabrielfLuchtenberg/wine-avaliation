//

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID
} from "graphql";
import { connectionArgs, fromGlobalId } from "graphql-relay";

import UserType from "../modules/user/UserType";
import { nodeField } from "../interface/NodeInterface";
import { UserLoader, WineLoader } from "../loader";
import UserConnection from "../modules/user/UserConnection";
import WineConnection from "../modules/wine/WineConnection";
import WineType from "../modules/wine/WineType";

export default new GraphQLObjectType({
  name: "Query",
  description: "The root of all... queries",
  fields: () => ({
    node: nodeField,
    me: {
      type: UserType,
      resolve: (root, args, context) =>
        context.user ? UserLoader.load(context, context.user._id) : null
    },
    user: {
      type: UserType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve: (obj, args, context) => {
        const { id } = fromGlobalId(args.id);
        return UserLoader.load(context, id);
      }
    },
    users: {
      type: UserConnection.connectionType,
      args: {
        ...connectionArgs,
        search: {
          type: GraphQLString
        }
      },
      resolve: (obj, args, context) => UserLoader.loadUsers(context, args)
    },
    wine: {
      type: WineType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve: (obj, args, context) => {
        const { id } = fromGlobalId(args.id);
        return WineLoader.load(context, id);
      }
    },
    wines: {
      type: WineConnection.connectionType,
      args: {
        ...connectionArgs,
        search: {
          type: GraphQLString
        }
      },
      resolve: (obj, args, context) => WineLoader.loadWines(context, args)
    }
  })
});
