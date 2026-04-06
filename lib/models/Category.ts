import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICategory extends Document {
  id: string;
  name: {
    en: string;
    hi: string;
    mr: string;
  };
  image: string;
  count: number;
}

const CategorySchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  name: {
    en: { type: String, required: true },
    hi: { type: String, required: true },
    mr: { type: String, required: true },
  },
  image: { type: String, required: true },
  count: { type: Number, default: 0 },
}, { timestamps: true });

const Category: Model<ICategory> = mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);

export default Category;
