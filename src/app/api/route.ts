import { getBookData } from '../../bookData.tsx';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const books = await getBookData();
        return NextResponse.json(books);
    } catch (error) {
        return NextResponse.json({error: 'Failed to fetch books'}, {status: 500});
    }
}