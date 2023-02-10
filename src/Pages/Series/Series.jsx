import React from "react";
import { useEffect, useState } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import Genres from "../../components/Genres/Genres";
import axios from "axios";
import useGenre from "../../hooks/useGenre";

const Series = () => {
   const [page, setPage] = useState(1);
   const [content, setContent] = useState([]);
   const [numOfPages, setNumOfPages] = useState();
   const [selectedGenres, setSelectedGenres] = useState([]);
   const [genres, setGenres] = useState([]);
   const genreforURL = useGenre(selectedGenres);

   const fetchMovies = async () => {
     const { data } = await axios.get(
       `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
     );
     setContent(data.results);
     setNumOfPages(data.total_pages);
   };

   useEffect(() => {
     fetchMovies();
   }, [page, genreforURL]);
  return (
    <div>
      <h1 className="pageTitle">TV Series</h1>
      <Genres
        type="tv"
        selectedGenres={selectedGenres}
        genres={genres}
        setGenres={setGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
      />
      <div className="trending">
        {content &&
          content.map((c) => {
            return (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type="tv"
                vote_average={c.vote_average}
              />
            );
          })}
      </div>

      {/* only displaying no of pages if page number > 1 */}
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Series;
