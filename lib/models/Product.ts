import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Document {
  id: string;
  name: {
    en: string;
    hi: string;
    mr: string;
  };
  price: number;
  discount: number;
  rating: number;
  category: string;
  image: string;
  gallery: string[];
  description: string;
  ingredients: string;
  stockStatus: string;
  quantity: string;
}

const ProductSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  name: {
    en: { type: String, required: true },
    hi: { type: String, required: true },
    mr: { type: String, required: true },
  },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  category: { type: String, required: true },
  image: { type: String, required: true },
  gallery: [{ type: String }],
  description: { type: String, required: true },
  ingredients: { type: String, required: true },
  stockStatus: { type: String, required: true },
  quantity: { type: String, required: true },
}, { timestamps: true });

const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
