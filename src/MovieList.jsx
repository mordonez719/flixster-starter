import './MovieList.css'
import MovieCard from './MovieCard'
import { useEffect, useState } from 'react'


function MovieList() {

    const [apiData, fillData] = useState([]);
    const [page_count, updatePage] = useState(1);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzI3MzU1OTdhYTI3OWM4MWU1NjBjOTNkMjkzZmZhMSIsInN1YiI6IjY2Njc3MjNiYWMzNzFiMGVjOWE5YmRlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wSxLDW8rfkP0AR-JqfTqcidEW65E-33Jb1Mz1V0EMyM'
        }
      };
    
    const fetchData = async () => {
          
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page='+ page_count, options);
        const data = await response.json();

        fillData([...apiData, ...data.results]);
        // console.log(page_count);
    };

    useEffect(() => {
        fetchData();
    }, [page_count]);

    // let movie_data = data.results;
    // console.log(data);
    console.log(apiData);
    // console.log(apiData.length);

    let movie_cards = [];
    
    for (let i = 0; i < apiData.length; i++){
        let movie = apiData[i];
        if (movie){
            movie_cards.push(<MovieCard id={i} movie={movie} title={movie.original_title} img={"https://image.tmdb.org/t/p/w220_and_h330_face" + movie.poster_path} rating={movie.vote_average}>
                </MovieCard>);
            // console.log(movie_cards);
        };
    };
    // apiData.forEach((movie, index) => {
    //     if (movie){
    //         movie_cards.push(<MovieCard id={index} title={movie.original_title} img={movie.poster_path} rating={movie.vote_average}>
    //             </MovieCard>);
    //     }
    // })

    function loadMore(){
        updatePage(page_count + 1);
    }

    return (
        <>
            <div className='movie-list'>
                <>
                    {movie_cards}
                </>
                {/* {apiData[0] ? (
                <MovieCard title={apiData[0].original_title} img={apiData[0].poster_path} rating={apiData[0].vote_average}>
                </MovieCard>
            ) : (<p>Loading...</p>)
            } */}
            </div>
            <button id='load-more' onClick={loadMore}>  Load More  </button>
        </>
    );
}

export default MovieList;