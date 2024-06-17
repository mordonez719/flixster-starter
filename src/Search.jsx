// Search
//
// Fetches and returns an array of MovieCards depending on the query entered by the user
// Called in App

import './Search.css'
import MovieCard from './MovieCard'
import { useEffect, useState } from 'react'
import { FaSearch, FaTheaterMasks, FaTv } from "react-icons/fa"

function Search() {

    // Use States
    const [apiData, fillData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    // Fetches movies adhering to the given query
    const fetchData = async (query) => {

        const apiKey = import.meta.env.VITE_API_KEY
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&include_adult=false&language=en-US&page=1`)
        const data = await response.json();

        fillData([...data.results]);

    }

    // Calls necessary functions when user enters query into the search bar
    const handleSearchChange = (value) => {
        setSearchQuery(value);
        fetchData(value);
    };

    let movie_cards = [];

    // Adds a movie card to array for each retrieved movie
    for (let i = 0; i < apiData.length; i++){
        let movie = apiData[i];
        if (movie){
            movie_cards.push(<MovieCard id={i} movie={movie} title={movie.original_title} img={"https://image.tmdb.org/t/p/w220_and_h330_face" + movie.poster_path} rating={movie.vote_average}>
                </MovieCard>);
        };
    };


    // Returns array of movie cards
    return (
        <div className='input-wrapper'>
            <input type="text" value={searchQuery} 
            onChange={(e) => handleSearchChange(e.target.value)} 
            placeholder="Search" />
            <div className='movie-list'>
                <>
                    {movie_cards}
                </>
            </div>
        </div>
    )
}

export default Search;