import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Please define the MONGODB_URI environment variable inside .env.local');
  process.exit(1);
}

// Model Definitions (Inline for script simplicity)
const ProductSchema = new mongoose.Schema({
  id: String,
  name: { en: String, hi: String, mr: String },
  price: Number,
  discount: Number,
  rating: Number,
  category: String,
  image: String,
  gallery: [String],
  description: String,
  ingredients: String,
  stockStatus: String,
  quantity: String,
}, { timestamps: true });

const CategorySchema = new mongoose.Schema({
  id: String,
  name: { en: String, hi: String, mr: String },
  image: String,
  count: Number,
}, { timestamps: true });

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);
const Category = mongoose.models.Category || mongoose.model('Category', CategorySchema);

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI!);
    console.log('Connected to MongoDB');

    // Read JSON files
    const productsPath = path.join(process.cwd(), 'data', 'products.json');
    const categoriesPath = path.join(process.cwd(), 'data', 'categories.json');

    const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
    const categoriesData = JSON.parse(fs.readFileSync(categoriesPath, 'utf8'));

    // Clear existing data
    await Product.deleteMany({});
    await Category.deleteMany({});
    console.log('Cleared existing data');

    // Insert new data
    await Product.insertMany(productsData);
    await Category.insertMany(categoriesData);
    console.log(`Seeded ${productsData.length} products and ${categoriesData.length} categories`);

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
}

seed();
