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
    classification: {
      type: String,
    },
    color: {
      type: String,
    },
    sugarTeor: {
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
  classification: string;
  color: string;
  sugarTeor: string;
  note: string;
}

const WineModel: Model<IWine> = mongoose.model('Wine', schema);

export default WineModel;
