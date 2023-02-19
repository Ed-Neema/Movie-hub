import React from "react";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import "./Search.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { fontFamily } from "@mui/system";
import { Button } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ae947e",
    },
    secondary: {
      main: "#053e85",
    },
  },
});


const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1)
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([])
  const [numOfPages, setNumOfPages] = useState();

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  // when page number of page tab changes, scroll to the top
   useEffect(() => {
     window.scroll(0, 0);
     fetchSearch();
   }, [type, page]);


  return (
    <div>
      <h1 className="pageTitle">Search</h1>
      <ThemeProvider theme={theme}>
        <div className="searchContainer">
          <TextField
            sx={{
              "& .css-10botns-MuiInputBase-input-MuiFilledInput-input": {
                backgroundColor: "rgba(255, 255, 255, 0.10)",
                borderRadius: "5px",
                color: "rgba(174, 148, 126, 0.8)",
                fontFamily: "Poppins",
              },
            }}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="SearchBox"
            id="outlined-basic"
            label="Search"
            variant="filled"
          />
          <Button
            variant="contained"
            style={{ marginLeft: 10 }}
            onClick={fetchSearch}
          >
            <SearchRoundedIcon />
          </Button>
        </div>
        {/* Tabs  */}
        <Tabs
          value={type}
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          style={{ paddingBottom: 10 }}
        >
          <Tab
            label="Search Movies"
            style={{ width: "50%", color: "#ae947e" }}
            textColor="primary"
          ></Tab>
          <Tab
            label="Search Series"
            style={{ width: "50%", color: "#ae947e" }}
            textColor="primary"
          ></Tab>
        </Tabs>
      </ThemeProvider>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Search;
