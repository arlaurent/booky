'use client'

import { useState } from 'react';
import Card from '../../components/Card';
// import { cardData } from '../../data/Cards';
// import { booksData } from '../../data/Books.json'
import { Books } from '../../src/app/bookData.tsx';
import {Bebas_Neue, Inclusive_Sans} from '@next/font/google';
import Masonry from 'react-masonry-css';



const bebasNeue = Bebas_Neue({subsets: ['latin'], weight: '400'});
const inclusiveSans = Inclusive_Sans({subsets: ['latin'], weight: ['400']})

export default function Home(){

    const booksData = Books();
    const [ cards, setCards ] = useState(booksData);

    console.log("hello world", booksData);
    
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
    };

    return (
        <div className = {["container", bebasNeue.className, inclusiveSans.className].join(' ')}> 
            <h1>Masonry</h1>            

            <Masonry
                breakpointCols = {breakpointColumnsObj}
                className = "masonry-grid"
                columnClassName = "masonry-grid-column">
                    {}
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

