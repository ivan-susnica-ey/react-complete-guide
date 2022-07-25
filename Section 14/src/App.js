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
      const res = await fetch(
        "https://react-http-2ef2f-default-rtdb.firebaseio.com/movies.json"
      );

      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await res.json();
      // moguce je i transformisati podatke ovde u novi objekat koji se salje dalje

      const loadedMovies = []; //array full of objects from for in loop

      for (const key in data) {
        // for in loop - to go through all the keys in data object
        //keys are the IDs of the movies (that criptic data)
        loadedMovies.push({
          id: key,
          title: data[key].title, // here we're drilling into that nested object where
          //we have title, openingText and releaseDate
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate, // this is how we dynamically access the property in JS
        });
      }

      setMovies(loadedMovies);
      setIsLoading(false);
    } catch (error) {
      setError(error.message); // now error is a string
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  async function addMovieHandler(movie) {
    const res = await fetch(
      "https://react-http-2ef2f-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "applicaton/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
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
