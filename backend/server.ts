import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import productRoutes from './routes/productRoutes';
import categoryRoutes from './routes/categoryRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Middleware
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:3000',
  'http://localhost:3001'
].filter(Boolean) as string[];

app.use(cors({
  origin: allowedOrigins.length > 0 ? allowedOrigins : '*',
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Aryas Food Products API is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
