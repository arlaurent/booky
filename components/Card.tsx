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
            <div>
                <div>
                    <div>{book.title}</div>
                    {book.subtitle && (<div>{book.subtitle}</div>)}
                </div>
            by {book.author} <br />
            </div>
            <div>
                <p>{book.shortDescription}</p>
                <q>{book.excerpt}</q>
            </div>
            <div>
                {book.reviews &&(
                    book.reviews.map((bookReview) => <div><p>{bookReview.review}</p><p>{(bookReview.reviewer && (
                        <span>{bookReview.reviewer}</span>
                    ))}</p></div> )
                )}
            </div>
            <div>
                {book.isbn && (Object.keys(book.isbn).map(index =>
                    <div key={index}>{book.isbn[index]}</div>
                )
                )
                }
            </div>

        </div>
        
       
    )
}