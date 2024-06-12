import { useState } from 'react'
import './App.css'
import.meta.env.VITE_API_KEY
import MovieList from './MovieList'

const App = () => {
  return(
  <div className="App">
    <header className='App-header'>Flixster
    </header>
    <section>
    <MovieList>
    </MovieList>
    </section>
    <footer className='App-footer'></footer>
  </div>
  );
}

export default App
