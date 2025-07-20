interface BookData{
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
        coverImageLink?: string;
}

interface CardProps {
    book: BookData;
}

export default function Card ({ book }: CardProps) {
    return(
    
        <div className = "card">
            <p>{book.title}</p>
            <div>{book.subtitle && (<div>{book.subtitle}</div>)}</div>
            by {book.author} <br />


        </div>
        
       
    )
}