//

import { GraphQLInt } from 'graphql'

import { connectionDefinitions } from 'graphql-relay'

import BeerType from './BeerType'

export default connectionDefinitions({
  name: 'Beer',
  nodeType: BeerType,
  connectionFields: {
    count: {
      type: GraphQLInt,
    },
  },
})
