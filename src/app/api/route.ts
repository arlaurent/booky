import { getBookData } from '@/app/bookData';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const booksy = await getBookData();
        return NextResponse.json(booksy);
    } catch (error) {
        return NextResponse.json({error: 'Failed to fetch books'}, {status: 500});
    }
}