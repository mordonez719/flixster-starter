import './Tabs.css'
import MovieList from './MovieCard'
import Search from './Search'
import { useEffect, useState } from 'react'
import.meta.env.VITE_API_KEY

function Tabs(){
    const [tabState, setTab] = useState(0);
    const toggleTab = (page) => {
        setTab(page);
    }

    return (
        <div>
            {/* Container */}
            <div className='group-tabs'>
                <button className={tabState === 0 ? "tabs active-tabs" : "tabs"} onClick={()=> toggleTab(0)}>
                    Now Playing
                </button>
                <button className={tabState === 1 ? "tabs active-tabs" : "tabs"} onClick={()=> toggleTab(1)}>
                    Search
                </button>
            </div>

            <div className='content-tabs'>
                <div className={tabState === 0 ? "content active-content" : "content"} onClick={()=> toggleTab(0)}>
                    {/* Now Playing Content */}
                    <MovieList>
                    </MovieList>
                </div>
                <div className={tabState === 1 ? "content active-content" : "content"} onClick={()=> toggleTab(1)}>
                    {/* Search Content */}
                    {/* <input type="text" placeholder="Search" /> */}
                    <Search>
                    </Search>
                </div>
            </div>
        </div>
    );
}

export default Tabs;