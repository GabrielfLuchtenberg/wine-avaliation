import mongoose, { Document, Model } from 'mongoose';

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
    },
    mainIngredients: {
      type: String,
    },
    note: {
      type: String
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'wine',
  },
);

export interface IWine extends Document {
  name: string;
  brand: string;
  quantity: Number;
  mainIngredients: string;
  note: string;
}

// this will make find, findOne typesafe
const WineModel: Model<IWine> = mongoose.model('Wine', schema);

export default WineModel;
