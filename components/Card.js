export default function Card ({title, content, color}) {
    return(
        <div className="card"
            style = {{
                backgroundColor: color || #f0f0f0,
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
                margin: '10px'
            }}>
                <h2>{title}</h2>
                <div>{content}</div>
            </div>
    )
}