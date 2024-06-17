// App
//
// Creates main Flixster page
// Displays Now Playing and Search tabs with MovieLists


import { useEffect, useState } from 'react'
import Search from './Search'
import './App.css'
import './Tabs.css'
import MovieList from './MovieList'
import { FaTheaterMasks, FaTv } from "react-icons/fa"

const App = () => {
  const [tabState, setTab] = useState(0);
  const toggleTab = (page) => {
        setTab(page);
    }

  return(
  <div className="App">
    <header className='App-header'>
      <FaTv></FaTv>
      FLIXSTER
      <FaTheaterMasks></FaTheaterMasks>
    </header>
    <section>
    <div className='group-tabs'>
      <button id="Now-Playing" className={tabState === 0 ? "tabs active-tabs" : "tabs"} onClick={()=> toggleTab(0)}>
        Now Playing
      </button>
      <button id="search-tab" className={tabState === 1 ? "tabs active-tabs" : "tabs"} onClick={()=> toggleTab(1)}>
        Search
      </button>
    </div>

    <div className='content-tabs'>
      <div className={tabState === 0 ? "content active-content" : "content"} onClick={()=> toggleTab(0)}>
        <MovieList>
        </MovieList>
      </div>
      <div className={tabState === 1 ? "content active-content" : "content"} onClick={()=> toggleTab(1)}>
        <Search>
        </Search>
      </div>
    </div>
    </section>
    <footer className='App-footer'></footer>
  </div>
  );
}

export default App
