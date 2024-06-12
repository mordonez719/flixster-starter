import './MovieList.css'
import MovieCard from './MovieCard'
import { useEffect, useState } from 'react'



// let movie_data = now-playing[results]



function MovieList() {
    const [apiData, fillData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzI3MzU1OTdhYTI3OWM4MWU1NjBjOTNkMjkzZmZhMSIsInN1YiI6IjY2Njc3MjNiYWMzNzFiMGVjOWE5YmRlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wSxLDW8rfkP0AR-JqfTqcidEW65E-33Jb1Mz1V0EMyM'
        }
      };
    
    const fetchData = async () => {
          
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const data = await response.json();

        fillData((prevData) => [...prevData, ...data.results]);
    };

    useEffect(() => {
        fetchData();

    }, []);

    // let movie_data = data.results;
    // console.log(data);
    // console.log(apiData);
    // console.log(apiData.length);

    for (let i = 0; i < apiData.length; i++){
        if (apiData[i]){
            console.log(apiData[i]);
        }
    }

    // let testTitle = apiData[0].original_title;
    // console.log(apiData[0]);
    // if (apiData[0]){
    //     console.log(apiData[0].original_title);
    // }
    // console.log("here");
    // console.log(apiData[0][original_title]);
    // console.log(testTitle);
    // while (!apiData[0]){
    //     let load = true;
    // }
    let movie_cards = [];

    apiData.forEach((movie, index) => {
        if (movie){
            movie_cards.push(<MovieCard title={movie.original_title} img={movie.poster_path} rating={movie.vote_average}>
                </MovieCard>);
        }
    })

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
        </>
    );
}

export default MovieList;