//

import { GraphQLObjectType } from 'graphql'

import LoginEmail from '../mutation/LoginEmailMutation'
import RegisterEmail from '../mutation/RegisterEmailMutation'
import ChangePassword from '../mutation/ChangePasswordMutation'
import AddBeer from '../mutation/AddBeer'

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    // auth
    AddBeer,
    LoginEmail,
    RegisterEmail,
    ChangePassword,
  }),
})
