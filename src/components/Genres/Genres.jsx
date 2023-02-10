import React from "react";
import { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import axios from "axios";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./Genres.css"

const theme = createTheme({
  palette: {
    primary: {
      main: "#fad7bc",
    },
    secondary: {
      main: "#053e85",
    },
  },
});
const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {

    const handleAdd=(genre)=>{
        setSelectedGenres([...selectedGenres,genre]);
        setGenres(genres.filter((g)=>g.id!==genre.id));
        setPage(1);
    }
    const handleRemove = (genre) => {
        setGenres([...genres,genre]);
        setSelectedGenres(selectedGenres.filter((g)=>g.id !== genre.id));
        setPage(1);
    }
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
    
  }, []);

  return (
    <div className="chipContainer">
      <ThemeProvider theme={theme}>
        {selectedGenres.map((genre) => (
          <Chip
          className="chip"
            // style={{ margin: 2 }}
            label={genre.name}
            key={genre.id}
            color="primary"
            clickable
            size="small"
            onDelete={() => handleRemove(genre)}
          />
        ))}
        {genres &&
          genres.map((genre) => {
            return (
              <Chip
              color="primary"
                variant="outlined"
                label={genre.name}
                style={{ margin: 2 }}
                clickable
                size="small"
                key={genre.id}
                onClick={() => handleAdd(genre)}
              />
            );
          })}
      </ThemeProvider>
    </div>
  );
};

export default Genres;
