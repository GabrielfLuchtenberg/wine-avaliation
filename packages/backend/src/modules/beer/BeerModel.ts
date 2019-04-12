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
    note:{
      type:String
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'beer',
  },
);

export interface IBeer extends Document {
  name: string;
  brand: string;
  quantity: Number;
  mainIngredients: string;
  note: string;
}

// this will make find, findOne typesafe
const BeerModel: Model<IBeer> = mongoose.model('Beer', schema);

export default BeerModel;
