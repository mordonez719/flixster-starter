import './MovieCard.css'
import MovieModal from './MovieModal'
import { useState } from 'react';

function MovieCard(props) {
    const [buttonPopup, setButtonPopup] = useState(false);

    // function openModal(){
    //     <movieModal></movieModal>
    //     // movieModal.style.display = block
    // }

    return (
        <>
            <div id={props.id} className='card-back'>
                <img onClick={() => setButtonPopup(true)} className="movie-image" src={props.img}></img>
                <p className="movie-title">{props.title}</p>
                <p className="movie-rating">{props.rating}</p>
                {/* {console.log("heresss")} */}
                {/* {console.log(props.movie)} */}
                <MovieModal movie={props.movie} trigger={buttonPopup} setTrigger={setButtonPopup}>
                    {/* <h3>Movie Modal</h3> */}
                </MovieModal>
                {/* <p className="movie-rating">{props.movie.vote_count}</p> */}
            </div>
        </>
    );
}

export default MovieCard;