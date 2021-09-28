import React from 'react'
import MoviesRows from './components/MoviesRows';
import Banner from './components/Banner';
import './App.css';
import urls from './allurls';

function App() {
  return (
    <div className="App">
       <Banner/> 
      <MoviesRows  title = {"NETFLIX ORIGNALS"}  tofetch = {urls.netflixOrignals} backdrop/>
      <MoviesRows  title = {"TRENDING NOW"}  tofetch = {urls.trending} />
      <MoviesRows  title = {"TOP RATED"}  tofetch = {urls.topRated} />
      <MoviesRows  title = {"ACTION MOVIES"}  tofetch = {urls.actionMovies} />
      <MoviesRows  title = {"COMEDY MOVIES"}  tofetch = {urls.comedyMovies} />
      <MoviesRows  title = {"HORROR MOVIES"}  tofetch = {urls.horrorMovies} />
      <MoviesRows  title = {"ROMANCE MOVIES"}  tofetch = {urls.romanceMovies} />
      <MoviesRows  title = {"DOCUMENTRIES"}  tofetch = {urls.documentries} />


    </div>
  );
}

export default App;
