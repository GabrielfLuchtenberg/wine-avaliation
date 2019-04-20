//
import DataLoader from 'dataloader'
import { Beer as BeerModel } from '../../model/index'
import { connectionFromMongoCursor, mongooseLoader } from '@entria/graphql-mongoose-loader'

export default class Beer {
  constructor(data, { user }) {
    this.id = data.id
    this._id = data._id
    this.name = data.name
    this.brand = data.brand
    this.quantity = data.quantity
    this.mainIngredients = data.mainIngredients
    this.note = data.note;
    // you can only see your own email, and your active status
    // if (beer && beer._id.equals(data._id)) {
    //   this.email = data.email
    //   this.active = data.active
    // }
  }
}

export const getLoader = () => {
  return new DataLoader(ids => mongooseLoader(BeerModel, ids));
}

const viewerCanSee = (context, data) => {
  // Anyone can see another user
  return true
}

export const load = async (context, id) => {
  if (!id) {
    return null
  }

  let data
  try {
    data = await context.dataloaders.BeerLoader.load(id)
  } catch (err) {
    return null
  }
  return viewerCanSee(context, data) ? new Beer(data, context) : null
}

export const clearCache = ({ dataloaders }, id) => {
  return dataloaders.BeerLoader.clear(id.toString())
}

export const loadBeers = async (context, args) => {
  const where = args.search ? { name: { $regex: new RegExp(`^${args.search}`, 'ig') } } : {}
  const beers = BeerModel.find(where, { _id: 1 }).sort({ createdAt: -1 })

  return connectionFromMongoCursor({
    cursor: beers,
    context,
    args,
    loader: load,
  })
}
