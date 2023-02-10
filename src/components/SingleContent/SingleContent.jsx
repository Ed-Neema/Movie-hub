import React from "react";
import { img_300, unavailable } from "../../config/config";
import Badge from "@mui/material/Badge";
import "./SingleContent.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <div className="media">
      <ThemeProvider theme={theme}>
        <Badge
          badgeContent={vote_average}
          color={vote_average > 6 ? "primary" : "secondary"}
        />
      </ThemeProvider>

      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <p className="title">{title}</p>
      <div className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <div className="subTitle">{date}</div>
      </div>
    </div>
  );
};

export default SingleContent;
