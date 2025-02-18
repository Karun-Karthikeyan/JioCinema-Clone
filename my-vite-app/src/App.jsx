import React, { useEffect, useState } from 'react';
import "./App.css";
import Header from "../src/components/header";
import Tags from "../src/components/tags";
import Carsoul from "../src/components/carsoul";
import Shows from "../src/components/shows";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [french, setFrench] = useState([]);
  const [english, setEnglish] = useState([]);

  useEffect(() => {
    fetch('/movies.json')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);

        // Set top-rated movies
        setTopRated(data.filter(movie => movie.rating > 8).slice(0, 5));

        // Set French movies
        setFrench(data.filter(movie => movie.language === "French").slice(0, 5));

        // Set Japanese movies
        setEnglish(data.filter(movie => movie.language === "English").slice(0, 5));
      })
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  useEffect(() => {
    console.log('Top Rated Movies:', topRated);
  }, [topRated]);

  useEffect(() => {
    console.log('French Movies:', french);
  }, [french]);

 

  return (
    <>
      <Header />
      <Tags />
      <Carsoul />
      <Shows title="Top Rated Movies" movies={topRated} />
      <Shows title="French Movies" movies={french} />
      <Shows title="English Movies" movies={english} />
    </>
  );
};

export default App;
