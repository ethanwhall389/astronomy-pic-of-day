export default function ImageCard({images}) {
    return (
        <div className="image-card">
            <h2 className="image-title">{images.title}</h2>
            <p className="image-date">{images.date}</p>
            <img className="image" src={images.hdurl} alt={images.title} />
            <p className="image-description">{images.explanation}</p>
        </div>
    )
}
