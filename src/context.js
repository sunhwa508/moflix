import React, { useState } from "react";
import axios from "axios";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [movies, setMovies] = useState({
    s: "movie",
    results: [],
    totalResults: "",
  });

  const apiurl = "http://www.omdbapi.com/?apikey=cfce499a&";

  const search = (e) => {
    if (e.key === "Enter") {
      console.log(apiurl);
      axios(apiurl + "&s=" + movies.s).then(({ data }) => {
        console.log(data);
        let results = data.Search;
        let totalResults = data.totalResults;
        setMovies((prevState) => {
          return { ...prevState, results: results, totalResults };
        });
      });
    }
  };

  const detail = async (id) => {
    const { data } = await axios(apiurl + "&i=" + id);
    return data;
  };

  //   const detail = (id) => {
  //     axios(apiurl + "&i=" + id).then(({ data }) => {
  //       let result = data;
  //       console.log(result);
  //       return result;
  //     });
  //   };

  const handleInput = (e) => {
    let title = e.target.value;
    setMovies((prevState) => {
      return { ...prevState, s: title };
    });
  };

  const movie = movies.results;
  const totalResults = movies.totalResults;
  const selected = movies.selected;
  return (
    <Context.Provider
      value={{ detail, movie, handleInput, search, totalResults }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
