import './Search.css'
import MovieCard from './MovieCard'
import { useEffect, useState } from 'react'
import { FaSearch, FaTheaterMasks, FaTv } from "react-icons/fa"

function Search() {

    const [apiData, fillData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzI3MzU1OTdhYTI3OWM4MWU1NjBjOTNkMjkzZmZhMSIsInN1YiI6IjY2Njc3MjNiYWMzNzFiMGVjOWE5YmRlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wSxLDW8rfkP0AR-JqfTqcidEW65E-33Jb1Mz1V0EMyM'
        }
      };

    const fetchData = async (query) => {

        const response = await fetch('https://api.themoviedb.org/3/search/movie?query='+ query + '&include_adult=false&language=en-US&page=1', options)
        console.log("the q: ", query)
        const data = await response.json();

        fillData([...data.results]);
        // fillData([...apiData, ...data.results]);

    }

    const handleSearchChange = (value) => {
        console.log("changed")
        console.log("value: ", value)
        setSearchQuery(value);
        // useEffect(() => {
            fetchData(value);
        // });
        // fetchData(value);
    };

    let movie_cards = [];
    
    for (let i = 0; i < apiData.length; i++){
        let movie = apiData[i];
        if (movie){
            movie_cards.push(<MovieCard id={i} movie={movie} title={movie.original_title} img={"https://image.tmdb.org/t/p/w220_and_h330_face" + movie.poster_path} rating={movie.vote_average}>
                </MovieCard>);
            // console.log(movie_cards);
        };
    };


    return (
        <div className='input-wrapper'>
            {/* <FaSearch id="search-icon"></FaSearch> */}
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