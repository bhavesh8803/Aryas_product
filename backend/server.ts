import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
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
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to Aryas Food Products API',
    status: 'online',
    endpoints: {
      products: '/api/products',
      categories: '/api/categories',
      health: '/health'
    }
  });
});

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

// Health Check
app.get('/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.json({ 
    status: 'ok', 
    message: 'Aryas Food Products API is running',
    database: dbStatus,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
