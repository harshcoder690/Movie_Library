import React, { useState } from "react";
import { MovieItem } from "./MovieItem";
import Playlist from "./Playlist";
import axios from "axios";
import { Navbar } from "../Navbar/Navbar";
import { ReactComponent as Loading } from "../../assets/loading.svg";
import TextField from "@mui/material/TextField";
import styles from "./Homepage.module.css"
export const HomePage = () => {
  const [text, setText] = useState("");

  const [movies, setMovies] = useState([]);
  const [isloading, setloading] = useState(false);

  let key = process.env.API_KEY;

  const handleSubmit = (e) => {
    setloading(true);
    e.preventDefault();

    axios
      .get(`https://www.omdbapi.com/?s=${text}&apikey=1aedf070`)
      .then((res) => {
        console.log(res);
        setMovies(res.data.Search);
      });

    setloading(false);
  };
  return (
    <div>
      {/* <Navbar /> */}
      <div>
        <div className={styles.main1}>
          <div className={styles.main}>
            <TextField id="outlined-basic" InputProps={{
              className: styles.Textfield
            }} type="name" onChange={(e) => setText(e.target.value)} fullWidth />
            <button className={styles.next} onClick={handleSubmit}>Search</button>
          </div>
        </div>
        <div>
          {text.length > 0 && isloading ? <Loading /> : movies.length === 0 ? (
            <Playlist />
          ) : (
            movies.map((item) => <MovieItem item={item} />)
          )}
        </div>
      </div>
    </div>
  );
};
