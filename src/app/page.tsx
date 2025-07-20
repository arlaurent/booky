'use client'

import { useState, useEffect } from 'react';
import {Bebas_Neue, Inclusive_Sans} from '@next/font/google';

import Card from '../../components/Card';
import Masonry from 'react-masonry-css';

const bebasNeue = Bebas_Neue({subsets: ['latin'], weight: '400'});
const inclusiveSans = Inclusive_Sans({subsets: ['latin'], weight: ['400']})

interface bookReview {
    review: string;
    reviewer?: string;
}

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
        
        reviews?: bookReview[];
        coverImageLink?: string;
    }
}


export default function Home(){

    const [bookDataset, setBookDataset] = useState<bookData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api')
            .then(res => res.json())
            .then(data => {
                setBookDataset(data);
                setLoading(false);
                console.log('fetched book data', data);
            }).catch(error => {
                console.error('error fetching books', error);
                setLoading(false);
            });
    }, []);

    console.log("hello world", bookDataset, 'with keys', bookDataset);
    
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
    };

    if (loading) { return <div>Loading</div>; }
    if (!bookDataset) { return <div> Failed to get data.</div> }
    else { return(
        <div className = {["container", bebasNeue.className, inclusiveSans.className].join(' ')}> 
            <h1>Masonry</h1>            

            <Masonry
                breakpointCols = { breakpointColumnsObj }
                className = "masonry-grid"
                columnClassName = "masonry-grid-column">                    
                    { Object.keys(bookDataset).map(index => 
                        <div key={index}><Card book = {bookDataset[index]}/></div>
                    )}
                    
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
                .masonry-grid-column{
                    padding-left: 10px;
                    padding-right: 10px;
                    background-clip: padding-box;
                }
                
                .card {
                margin: 2.5ch 1ch 2.5ch 1ch;            
                width: 40ch;
                background-color: #fdfdfd;
                overflow: hidden;
                border-radius: 2.5ch 2.5ch 0.5ch 2.5ch/2.5ch 2.5ch 0.5ch 2.5ch;
                box-shadow: 1ch 1ch 2ch 0.25ch rgba(45, 45, 45, 0.25);
                position:relative;                
            }
            `}</style>
        </div>)};
}

