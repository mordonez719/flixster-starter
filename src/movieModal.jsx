import './MovieModal.css'
import React from 'react';


function MovieModal(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-content'>
                <button className='close-popup' onClick={() => props.setTrigger(false)}>
                    Close
                </button>
                <img src={"https://image.tmdb.org/t/p/w220_and_h330_face" + props.movie.backdrop_path}></img>
                <div>
                    {props.movie.original_title}
                </div>
                <div>
                    {props.movie.release_date}
                </div>
                <div>
                    {props.movie.overview}
                </div>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default MovieModal;