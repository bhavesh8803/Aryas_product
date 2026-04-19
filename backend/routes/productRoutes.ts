import express from 'express';
import Product from '../models/Product';

const router = express.Router();

// GET all products
router.get('/', async (req, res) => {
    try {
        const data = await Product.find({} as any).sort({ createdAt: -1 });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

// POST to create or update product
router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const updatedProduct = await Product.findOneAndUpdate(
            { id: body.id } as any,
            body,
            { new: true, upsert: true }
        );
        res.json({ success: true, product: updatedProduct });
    } catch (error) {
        res.status(400).json({ error: 'Failed to save data' });
    }
});

// DELETE product
router.delete('/', async (req, res) => {
    try {
        const id = req.query.id as string;
        const result = await Product.deleteOne({ id } as any);
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        
        res.json({ success: true });
    } catch (error) {
        res.status(400).json({ error: 'Failed to delete data' });
    }
});

export default router;
