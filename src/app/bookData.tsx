import { promises as fs } from 'fs';
import path from 'path';

interface bookData {
    [key: string]: {
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
            reviewer: string;
        }[];

        coverImageLink?: string | undefined;
    };
}

export default async function Books() {
    const jsonPath: string = path.join(process.cwd(), 'data/Books.json');
    const tinyLibrary: string = await fs.readFile(jsonPath, 'utf8');
    
    const bigLib: bookData = JSON.parse(tinyLibrary);

    return(<div>
        {JSON.stringify(bigLib, null, 2)}
    </div>)
}