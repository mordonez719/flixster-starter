import './MovieCard.css'
import movieModal from './movieModal'

function MovieCard(props) {

    function openModal(){
        <movieModal></movieModal>
        // movieModal.style.display = block
    }

    return (
        <>
            <div id={props.id} className='card-back'>
                <img className="movie-image" src={props.img}></img>
                <p className="movie-title">{props.title}</p>
                <p className="movie-rating">{props.rating}</p>
                {/* {console.log("heresss")} */}
                {/* {console.log(props.movie)} */}
                <movieModal movie={props.movie}></movieModal>
                {/* <p className="movie-rating">{props.movie.vote_count}</p> */}
            </div>
        </>
    );
}

export default MovieCard;