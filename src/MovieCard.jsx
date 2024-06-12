import './MovieCard.css'

function MovieCard(props) {
    return (
        <>
            <section id={props.id} className='card-back'>
                <img className="movie-image" src={props.img}></img>
                <h2 className="movie-title">{props.title}</h2>
                <h3 className="movie-rating">{props.rating}</h3>
            </section>
        </>
    );
}

export default MovieCard;