// MovieList
//
// Fetched data for now playing & flter, includes load more option
// Creates an array of MovieCards
// Called in App

import './MovieList.css'
import MovieCard from './MovieCard'
import { useEffect, useState } from 'react'
import Dropdown from './Dropdown';


function MovieList() {

    // Use States
    const [apiData, fillData] = useState([]);
    const [page_count, updatePage] = useState(1);
    const [filter, setFilter] = useState("");

    // updates the filter as the user enteres a query, empties the data after the user enters a new search, 
    // resets the page number to 1 after searching
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        fillData([])
        updatePage(1)
    }

    
    const fetchData = async () => {
        // default filter, returns now playing
        if (filter === ""){
            const apiKey = import.meta.env.VITE_API_KEY

            const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&include_adult=false&language=en-US&page=`+ page_count);
            const data = await response.json();

            fillData([...apiData, ...data.results]);
        }
        else {
        // returns results of selected filter
            const apiKey = import.meta.env.VITE_API_KEY

            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=` + page_count + '&sort_by=' + filter);
            const data = await response.json();

            fillData([...apiData, ...data.results]);
        }
    };

    useEffect(() => {
        fetchData();
    }, [filter, page_count]);


    let movie_cards = [];

    // created movie cards to be returned
    for (let i = 0; i < apiData.length; i++){
        let movie = apiData[i];
        if (movie){
            movie_cards.push(<MovieCard key={i} movie={movie} title={movie.original_title} img={"https://image.tmdb.org/t/p/w220_and_h330_face" + movie.poster_path} rating={movie.vote_average}/>);
        };
    };

    // updates the current page number to fetch additional movies
    function loadMore(){
        updatePage(page_count + 1);
    }

    return (
        <>
        <Dropdown filt={handleFilterChange}></Dropdown>
            <div className='movie-list'>
                <>
                    {movie_cards}
                </>
            </div>
            <button id='load-more' onClick={loadMore}>  Load More  </button>
        </>
    );
}

export default MovieList;