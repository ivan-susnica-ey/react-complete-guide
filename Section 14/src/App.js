import React, { useEffect, useState, useCallback } from "react";

import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("https://swapi.dev/api/films/");

      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await res.json();
      // moguce je i transformisati podatke ovde u novi objekat koji se salje dalje

      setMovies(data.results);
      setIsLoading(false);
    } catch (error) {
      setError(error.message); // now error is a string
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  function addMovieHandler(movie) {
    console.log(movie);
  }

  let content = <p>Found no movies.</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
