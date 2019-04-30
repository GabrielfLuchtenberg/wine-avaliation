//
import DataLoader from "dataloader";
import { Wine as WineModel } from "../../model/index";
import {
  connectionFromMongoCursor,
  mongooseLoader
} from "@entria/graphql-mongoose-loader";

export default class Wine {
  constructor(data, { user }) {
    this.id = data.id;
    this._id = data._id;
    this.name = data.name;
    this.brand = data.brand;
    this.classification = data.classification;
    this.color = data.color;
    this.sugarTeor = data.sugarTeor;
    this.note = data.note;
  }
}

export const getLoader = () => {
  return new DataLoader(ids => mongooseLoader(WineModel, ids));
};

const viewerCanSee = (context, data) => {
  return true;
};

export const load = async (context, id) => {
  if (!id) {
    return null;
  }

  let data;
  try {
    data = await context.dataloaders.WineLoader.load(id);
  } catch (err) {
    return null;
  }
  return viewerCanSee(context, data) ? new Wine(data, context) : null;
};

export const clearCache = ({ dataloaders }, id) => {
  return dataloaders.WineLoader.clear(id.toString());
};

export const loadWines = async (context, args) => {
  const where = args.search
    ? { name: { $regex: new RegExp(`^${args.search}`, "ig") } }
    : {};
  const wines = WineModel.find(where, { _id: 1 }).sort({ createdAt: -1 });

  return connectionFromMongoCursor({
    cursor: wines,
    context,
    args,
    loader: load
  });
};
