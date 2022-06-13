import React, { useState } from "react";
import { MovieItem } from "./MovieItem";
import Playlist from "./Playlist";
import axios from "axios";
export const HomePage = () => {
  const [text, setText] = useState("");

  const [movies, setMovies] = useState([]);

  let key = process.env.API_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`https://www.omdbapi.com/?s=${text}&apikey=1aedf070`)
      .then((res) => {
        console.log(res);
        setMovies(res.data.Search);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="name" onChange={(e) => setText(e.target.value)} />
        <button>Search</button>
        <div>
          {movies.length === 0 ? (
            <Playlist />
          ) : (
            movies.map((item) => <MovieItem item={item} />)
          )}
        </div>
      </form>
    </div>
  );
};
