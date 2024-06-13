// import { useState } from 'react'
import { useEffect, useState } from 'react'
import Search from './Search'
import './App.css'
import './Tabs.css'
import.meta.env.VITE_API_KEY
import MovieList from './MovieList'
// import Tabs from './Tabs'

const App = () => {
  const [tabState, setTab] = useState(0);
  const toggleTab = (page) => {
        setTab(page);
    }

  return(
  <div className="App">
    <header className='App-header'>Flixster
    {/* <input type="text" placeholder="Search" /> */}
    </header>
    <section>
    {/* <MovieList>
    </MovieList> */}
    {/* <Tabs>
    </Tabs> */}
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
