'use client'

import { useState, useEffect } from 'react';
// import Card from '../../components/Card';

import { getBookData } from './bookData';
import {Bebas_Neue, Inclusive_Sans} from '@next/font/google';
import Masonry from 'react-masonry-css';

const bebasNeue = Bebas_Neue({subsets: ['latin'], weight: '400'});
const inclusiveSans = Inclusive_Sans({subsets: ['latin'], weight: ['400']})

interface bookReview {
    review: string;
    reviewer?: string;
}

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
        
        reviews?: bookReview[];
        coverImageLink?: string;
    }
}

interface bookDisplayProps {
    books: bookData;
}


export default function Home(){

    const [bookDataset, setBookDataset] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('api/books')
            .then(res => res.json())
            .then(data => {
                setBookDataset(data);
                setLoading(false);
                console.log('this is the data', data);
            }).catch(error => {
                console.error('error fetching books', error);
                setLoading(false);
            });
    }, []);

    console.log("hello world", bookDataset);
    
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
    };

    if (loading) return <div>Loading</div>;
    if (!bookDataset) return (
        <div className = {["container", bebasNeue.className, inclusiveSans.className].join(' ')}> 
            <h1>Masonry</h1>            

            <Masonry
                breakpointCols = {breakpointColumnsObj}
                className = "masonry-grid"
                columnClassName = "masonry-grid-column">
                    {
                       Object.entries(bookDataset).map(([key, book]) => (
                            <div key={key}>
                                <h2>{book.title}</h2>
                            </div>
                       ))
                    }
            </Masonry>
            
            <style jsx global>{`
                .masonry-grid {
                    display: flex;
                    width: 100%;
                    max-width: 200%;
                    max-width: 1200px;
                    margin-left: auto;
                    margin-right: auto;
                } 
                .masonry.grid_column{
                    padding-left: 10px;
                    padding-right: 10px;
                    background-clip: padding-box;
                }
            `}</style>
        </div>
    );
}

