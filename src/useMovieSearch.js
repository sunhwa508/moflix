import { useEffect, useState } from "react";
import axios from "axios";

export default function useMovieSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies([]);
  }, [query]);

  const apiurl = "https://www.omdbapi.com/?apikey=cfce499a&";

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios({
      method: "GET",
      url: apiurl,
      params: { s: query, page: pageNumber },
    }).then((res) => {
      if (res.data.Response !== "False") {
        setMovies((prevMovies) => [...prevMovies, ...res.data.Search]);
        console.log("hasMore hook", res.data.Search.length > 0);
        setHasMore(res.data.Search.length > 0);
        setLoading(false);
      }
    });
  }, [query, pageNumber]);
  return { loading, error, movies, hasMore };
}
