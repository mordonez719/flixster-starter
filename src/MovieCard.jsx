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
            <div id={props.id}>
                <div className='card-back'>
                    <img onClick={() => setButtonPopup(true)} className="movie-image" src={props.img}></img>
                    <p className="movie-title">{props.title}</p>
                    <p className="movie-rating">Rating: {props.rating} ⭐</p>
                </div>
                <MovieModal movie={props.movie} trigger={buttonPopup} setTrigger={setButtonPopup}>
                </MovieModal>
            </div>
        </>
    );
}

export default MovieCard;