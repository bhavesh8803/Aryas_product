import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'categories.json');

function readData() {
    const jsonData = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(jsonData);
}

function writeData(data: any) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
}

export async function GET() {
    try {
        const data = readData();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const data = readData();

        const index = data.findIndex((c: any) => c.id === body.id);
        if (index !== -1) {
            data[index] = body;
        } else {
            data.push(body);
        }

        writeData(data);
        return NextResponse.json({ success: true, category: body });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to save data' }, { status: 400 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        let data = readData();
        data = data.filter((c: any) => c.id !== id);
        writeData(data);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete data' }, { status: 400 });
    }
}
