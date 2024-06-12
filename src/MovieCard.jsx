import './MovieCard.css'

function MovieCard(props) {
    return (
        <>
            <div id={props.id} className='card-back'>
                <img className="movie-image" src={props.img}></img>
                <p className="movie-title">{props.title}</p>
                <p className="movie-rating">{props.rating}</p>
            </div>
        </>
    );
}

export default MovieCard;