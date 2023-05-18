import React, { useState, useEffect } from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setloading] = useState(true);

  const searchMovies = (str, type = 'all') => {
    setloading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setloading(false);
      })
      .catch((error) => {
        console.error(error);
        setloading(false);
      });
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setloading(false);
      })
      .catch((error) => {
        console.error(error);
        setloading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Search searchMovies={searchMovies} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
}

export { Main };
