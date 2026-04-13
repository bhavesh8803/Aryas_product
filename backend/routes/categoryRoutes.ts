import express from 'express';
import Category from '../models/Category';

const router = express.Router();

// GET all categories
router.get('/', async (req, res) => {
    try {
        const data = await Category.find({}).sort({ count: -1 });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read data' });
    }
});

// POST to create or update category
router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const updatedCategory = await Category.findOneAndUpdate(
            { id: body.id } as any,
            body,
            { new: true, upsert: true }
        );
        res.json({ success: true, category: updatedCategory });
    } catch (error) {
        res.status(400).json({ error: 'Failed to save data' });
    }
});

// DELETE category
router.delete('/', async (req, res) => {
    try {
        const id = req.query.id as string;
        const result = await Category.deleteOne({ id } as any);
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Category not found' });
        }
        
        res.json({ success: true });
    } catch (error) {
        res.status(400).json({ error: 'Failed to delete data' });
    }
});

export default router;
