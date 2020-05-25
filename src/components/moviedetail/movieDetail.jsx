import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieDetail.css";
import axios from "axios";

const MovieDetail = () => {
  const [selected, setSelected] = useState({});
  const { movieId } = useParams();
  const apiurl = "https://www.omdbapi.com/?apikey=cfce499a";
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(apiurl + "&i=" + movieId);
      setSelected(data);
    };
    fetchData();
  }, [movieId]);
  console.log(selected);

  return (
    <div className="movieDetailList">
      <div className="movie">
        <img src={selected.Poster} alt="poster" />
        <ul className="list">
          <li>{selected.Title}</li>
          <li>
            {selected.Country} {selected.Type}{" "}
          </li>
          <br />
          <li>PLOT</li>
          <li>{selected.Plot}</li>
          <br />
          <li>{selected.Runtime}</li>
          <li>{selected.Language}</li>
        </ul>
      </div>
    </div>
  );
};
export default MovieDetail;
