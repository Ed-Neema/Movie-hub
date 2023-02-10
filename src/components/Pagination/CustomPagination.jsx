import React from "react";
import Pagination from "@mui/material/Pagination";
import "./CustomPagination.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#ae947e",
    },
    secondary: {
      main: "#053e85",
    },
  },
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          fontSize: "0.8rem",
          color: "#ae947e",
        },
        valueLabel: {},
      },
    },
  },
});
const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div className="pagination">
      <ThemeProvider theme={darkTheme}>
        <Pagination
          onChange={(e) => {
            handlePageChange(e.target.textContent);
          }}
          count={numOfPages}
          // variant="outlined"
          shape="rounded"
          color={'primary'}
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
