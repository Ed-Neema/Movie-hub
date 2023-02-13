import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import "./Search.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { fontFamily } from "@mui/system";
import { Button } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

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
  const [searchText, setSearchText] = useState("");
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
                color: "#fff",
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
            // color="primary"
          />
          <Button variant="contained" style={{ marginLeft: 10 }}>
            <SearchRoundedIcon />
          </Button>
        </div>
        {/* Tabs  */}
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          fontFamily="Poppins"
          backgroundColor="primary"
          // sx={{
          //   "& .css-15ri884-MuiButtonBase-root-MuiTab-root": {
          //     color: "rgba(255, 255, 255, 0.10)",
          //     fontFamily: "Poppins",
          //     backgroundColor: "#fff",
          //   },
          // }}
        >
          <Tab
            label="Search Movies"
            style={{ width: "50%" }}
            textColor="primary"
            sx={{
              "& .css-15ri884-MuiButtonBase-root-MuiTab-root": {
                backgroundColor: "rgba(255, 255, 255, 0.10)",
                color: "rgba(255, 255, 255, 0.10)",
                fontFamily: "Poppins",
              },
            }}
          ></Tab>
          <Tab
            label="Search Series"
            style={{ width: "50%" }}
            textColor="primary"
            sx={{
              "& .css-12gaafx-MuiButtonBase-root-MuiTab-root": {
                color: "rgba(255, 255, 255, 0.10)",
                fontFamily: "Poppins",
                backgroundColor: "rgba(255, 255, 255, 0.10)",
              },
            }}
          ></Tab>
        </Tabs>
      </ThemeProvider>
      {searchText}
    </div>
  );
};

export default Search;
