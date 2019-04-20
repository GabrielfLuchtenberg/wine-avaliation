//

import { GraphQLInt } from 'graphql'

import { connectionDefinitions } from 'graphql-relay'

import WineType from './WineType'

export default connectionDefinitions({
  name: 'Wine',
  nodeType: WineType,
  connectionFields: {
    count: {
      type: GraphQLInt,
    },
  },
})
