import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Product from '@/lib/models/Product';

export async function GET() {
    try {
        await dbConnect();
        const data = await Product.find({}).sort({ createdAt: -1 });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();

        // Check if it's an update or new
        const updatedProduct = await Product.findOneAndUpdate(
            { id: body.id },
            body,
            { new: true, upsert: true }
        );

        return NextResponse.json({ success: true, product: updatedProduct });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to save data' }, { status: 400 });
    }
}

export async function DELETE(request: Request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        
        const result = await Product.deleteOne({ id });
        
        if (result.deletedCount === 0) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }
        
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete data' }, { status: 400 });
    }
}
