import React, { useState, useRef, useCallback } from "react";
import Search from "../../components/Search/search";
import { Link } from "react-router-dom";
import "./home.css";
import useMoviesSearch from "../../useMovieSearch";
import Header from "../../components/header/header";
function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { movies, hasMore, loading, error } = useMoviesSearch(
    query,
    pageNumber
  );
  console.log(query, pageNumber);

  const observer = useRef();
  const lastMoviesElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }
  console.log(movies);
  return (
    <div>
      <Header />
      <span className="movieIcon">🎬</span>
      <Search handleSearch={handleSearch} query={query} />
      <div className="movieList">
        {movies.map((movie, index) => {
          if (movies.length === index + 1) {
            return (
              <div ref={lastMoviesElementRef} key={movie.imdbID}>
                <div> {movie.Title}</div>
                <Link to={`/moflix/${movie.imdbID}`}>
                  <img src={`${movie.Poster}`} />
                </Link>
              </div>
            );
          } else {
            return (
              <div className="moviesresults" key={movie.Title}>
                <Link to={`/moflix/${movie.imdbID}`}>
                  <img src={`${movie.Poster}`} />{" "}
                </Link>
                <div className="desc">
                  {movie.Title}
                  <br />
                  {movie.Year}
                </div>
              </div>
            );
          }
        })}
      </div>
      <div>{loading && "NO MORE 😷😷"}</div>
      <div>{error && "Error"}</div>
    </div>
  );
}

export default App;
