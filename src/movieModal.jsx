import './MovieModal.css'
import React from 'react';


function MovieModal(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-content'>
                <button className='close-popup' onClick={() => props.setTrigger(false)}>
                    Close
                </button>
                <img className="modal-img" src={"https://image.tmdb.org/t/p/w533_and_h300_bestv2" + props.movie.backdrop_path}></img>
                <div id="title">
                    {props.movie.original_title}
                </div>
                <div id="date">
                    {props.movie.release_date}
                </div>
                <div id="overview">
                    {props.movie.overview}
                </div>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default MovieModal;