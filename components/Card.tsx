

export default function Card ({book}) {
    return(
        <div className = "card">
            <p> { book.title } </p>
            <div className = "tag-Container">

                {book.tags.map ((tag, index) => (<div className = "bookmark-tag"> {tag} </div> ))}
            </div>
            
            <div className = "card-content">
                <div className = "subCard-One">
                    <div className = "subCard-One-Container">
                        <h2>{book.title}</h2>
                        
                        {book.author && (<div className="author-Container">by <span className="author">
                                                className{book.author}
                                            </span>                            
                                        </div>)}
                    </div>


                    {book.subtitle && (
                            <div className="subtitle">"{book.subtitle}"</div>
                        )}

                    {
                        reviews && reviews.length > 0 && (
                            <div className="reviews">
                                <h4>What readers say:</h4>
                                {reviews.map(
                                        (review, index) => (
                                            <div key={index} className="review"> 
                                                "{review.quote}"
                                            </div>
                                        ))}
                            </div>
                        )}
                    {tags && tags.length > 0 && (
                        <div className = "tags">
                            {tags.map((tagItem, index) => (<span key={index} className="tag">{tagItem.tag}</span>))}
                        </div>
                    )}
                </div>

            </div>
         <style jsx>{`
            .card {
                margin: 2.5ch 1ch 2.5ch 1ch;            
                width: 40ch;
                background-color: #fdfdfd;
                overflow: hidden;
                border-radius: 2.5ch 2.5ch 0.5ch 2.5ch/2.5ch 2.5ch 0.5ch 2.5ch;
                box-shadow: 1ch 1ch 2ch 0.25ch rgba(45, 45, 45, 0.25);
                position:relative;                
            }
            .card-bar { 
                height: 8ch;
                width: 125%;
                margin-top: -5ch;
                margin-left: -3ch;
                background-color: #212B42;
                margin-bottom: 1.5ch;
            }

            .subCard-One {}

            .author-Container {}

            .author {}

            .card-content {
                position: relative;
                z-index: 1;
                padding: 0ch 2.5ch 2.5ch 2.5ch;
                display: flex;
                flex-direction: column;
                color: #2b2b2b;
            }
            .card-content h2{
                font-family: 'Bebas Neue', monospace;
                margin-top: 0;
                margin-bottom: 0.5em;
                font-size: 1.6em;
            }
            .subtitle{
                font-family: 'Bebas Neue', sans serif;
                font-style: italic;
                margin-left: 1ch;
                font-size: 1em
            }
            .reviews {
                margin-top: 1em;
            }
            .reviews h3 {
                font-size: 1.1em;
                margin-bottom: 0.5em;
                color: #555;
            }
        
            .review {
                font-size: 1em;
                margin-bottom: 0.7em;
                line-height: 1.5;
            }
        
            .tags {
                margin-top: 1.5em;
                display: flex;
                flex-wrap: wrap;
                gap: 0.5em;
            }
            
            .tag {
                background-color: rgba(0,0,0,0.1);
                padding: 0.4em 0.8em;
                border-radius: 1.6em;
                font-size: 0.8em;
            }
            `}</style>
        </div>
       
    )
}