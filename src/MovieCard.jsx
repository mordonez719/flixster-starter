// MovieCard
//
// Creates display card with basic information about movie passed in props, calls a MovieModal
// Called in MovieList and Search

import './MovieCard.css'
import MovieModal from './movieModal'
import { useState } from 'react';

function MovieCard(props) {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <>
            <div>
                <div className='card-back'>
                    <img onClick={() => setButtonPopup(true)} className="movie-image" src={props.img} alt="movie poster"></img>
                    <p className="movie-title">{props.title}</p>
                    <p className="movie-rating">Rating: {props.rating} ⭐</p>
                </div>
                <MovieModal movie={props.movie} trigger={buttonPopup} setTrigger={setButtonPopup}/>
            </div>
        </>
    );
}

export default MovieCard;