"use server"

import { promises as fs } from 'fs';
import path from 'path';

interface bookData {
    [index: string]: {
        title: string;
        subtitle?: string;
        author: string;

        isbn?: {
            hardcover?: string;
            softcover?: string;
            ebook?: string;
            [otherEdition: string]: string | undefined;        
        };

        tags: string[];
        search_tags: string[];

        shortDescription: string;
        excerpt: string;

        reviews?: {
            review: string;
            reviewer?: string;
        }[];

        coverImageLink?: string | undefined;
    };
}

export async function getBookData(): Promise<bookData> {
    const jsonPath: string = path.join(process.cwd(), 'data/Books.json');
    const tinyLibrary: string = await fs.readFile(jsonPath, 'utf8');
    
    const bigLib = JSON.parse(tinyLibrary);

    return (bigLib);
}

export default async function Books() {
    
    const library = await getBookData();

    return(library);
}