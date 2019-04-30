//

import { GraphQLObjectType } from "graphql";

import LoginEmail from "../mutation/LoginEmailMutation";
import RegisterEmail from "../mutation/RegisterEmailMutation";
import ChangePassword from "../mutation/ChangePasswordMutation";
import AddWine from "../mutation/AddWine";

export default new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    // auth
    AddWine,
    LoginEmail,
    RegisterEmail,
    ChangePassword
  })
});
